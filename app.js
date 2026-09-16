(() => {
  'use strict';
  
  const storageKey = 'mgt3745.progressTracker.v1';
  const goalForm = document.querySelector('#goalForm');
  const goalNameInput = document.querySelector('#goalName');
  const goalStatusSelect = document.querySelector('#goalStatus');
  const inProgressGoalList = document.querySelector('#inProgressGoalList');
  const completedGoalList = document.querySelector('#completedGoalList');
  const goalError = document.querySelector('#goalError');
  const saveStatus = document.querySelector('#saveStatus');
  const saveError = document.querySelector('#saveError');
  const emptyState = document.querySelector('#emptyState');
  let progressTracker = loadProgressTracker();
  // Give each goal a unique ID so individual goals can be edited or deleted later.
  let nextGoalId = progressTracker.goals.reduce(
    (highestId, progressGoal) => Math.max(highestId, progressGoal.id),
    0
  ) + 1;

  function loadProgressTracker() {
    try {
      const storedText = window.localStorage.getItem(storageKey);
      const parsed = storedText === null ? { goals: [] } : JSON.parse(storedText);
      const validStatuses = ['not-started', 'in-progress', 'completed'];
      const hasValidGoals = Array.isArray(parsed.goals) && parsed.goals.every(progressGoal => (
        Number.isInteger(progressGoal.id)
        && typeof progressGoal.name === 'string'
        && validStatuses.includes(progressGoal.status)
      ));
      if (!hasValidGoals) {
        throw new Error('Unexpected stored data');
      }
      return parsed;
    } catch {
      saveStatus.textContent = 'Goals/expectations could not be read. Starting with an empty list.';
      return { goals: [] };
    }
  }
// Save changes before updating the displayed state so failed saves do not appear successful.
  function saveProgressTracker(nextProgressTracker) {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(nextProgressTracker));
      return true;
    } catch {
      saveError.textContent = 'Could not save. Your goal/expectation is still here. Try again when storage is available.';
      saveStatus.textContent = '';
      return false;
    }
  }
// Replace the displayed goal with temporary controls so the user can change its information.
  function editProgressGoal(progressGoal, listItem, editButton) {
    const inlineGoalNameInput = document.createElement('input');
    const inlineGoalStatusSelect = document.createElement('select');
    const saveButton = document.createElement('button');
    const cancelButton = document.createElement('button');
    const goalName = listItem.querySelector('h4');
    const goalStatus = listItem.querySelector('p');

    inlineGoalNameInput.type = 'text';
    inlineGoalNameInput.value = progressGoal.name;
    inlineGoalNameInput.setAttribute('aria-label', 'Goal/expectation name');
    inlineGoalStatusSelect.setAttribute('aria-label', 'Goal/expectation status');
    // Keep the editing choices consistent with the statuses available when creating a goal.
    Array.from(goalStatusSelect.options).forEach(option => {
      const statusOption = document.createElement('option');
      statusOption.value = option.value;
      statusOption.textContent = option.textContent;
      inlineGoalStatusSelect.append(statusOption);
    });
    inlineGoalStatusSelect.value = progressGoal.status;
    saveButton.type = 'button';
    saveButton.textContent = 'Save';
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancel';
    goalName.replaceWith(inlineGoalNameInput);
    goalStatus.replaceWith(inlineGoalStatusSelect);
    editButton.replaceWith(saveButton, cancelButton);
    inlineGoalNameInput.focus();

    cancelButton.addEventListener('click', renderProgressGoals);
    saveButton.addEventListener('click', () => {
      const trimmedGoalName = inlineGoalNameInput.value.trim();
      if (trimmedGoalName.length === 0) {
      goalError.textContent = 'Remember to enter a goal or expectation name.';
        inlineGoalNameInput.focus();
        return;
      }

      const nextProgressTracker = {
        goals: progressTracker.goals.map(existingGoal => (
          existingGoal.id === progressGoal.id
            ? { ...existingGoal, name: trimmedGoalName, status: inlineGoalStatusSelect.value }
            : existingGoal
        ))
      };
      if (!saveProgressTracker(nextProgressTracker)) return;

      progressTracker = nextProgressTracker;
      renderProgressGoals();
      goalError.textContent = '';
      saveError.textContent = '';
      saveStatus.textContent = 'Goal/Expectation updated in this browser.';
    });
  }
// Create a new list without the selected goal so the deletion can be saved safely.
  function deleteProgressGoal(progressGoal) {
    const nextProgressTracker = {
      goals: progressTracker.goals.filter(existingGoal => existingGoal.id !== progressGoal.id)
    };
    if (!saveProgressTracker(nextProgressTracker)) return;

    progressTracker = nextProgressTracker;
    renderProgressGoals();
    saveError.textContent = '';
    saveStatus.textContent = 'Goal/Expectation deleted from this browser.';
  }

  function renderProgressGoals() {
    inProgressGoalList.replaceChildren();
    completedGoalList.replaceChildren();
    emptyState.hidden = progressTracker.goals.length > 0;

    progressTracker.goals.forEach(progressGoal => {
      const listItem = document.createElement('li');
      const goalName = document.createElement('h4');
      const goalStatus = document.createElement('p');
      const editButton = document.createElement('button');
      const deleteButton = document.createElement('button');
      // Treat user-entered goal names as text rather than allowing them to be interpreted as HTML.
      goalName.textContent = progressGoal.name;
      goalStatus.textContent = progressGoal.status;
      editButton.type = 'button';
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => editProgressGoal(progressGoal, listItem, editButton));
      deleteButton.type = 'button';
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => deleteProgressGoal(progressGoal));
      listItem.append(goalName, goalStatus, editButton, deleteButton);
// Keep completed goals separate so users can distinguish finished progress from active goals.
      const goalList = progressGoal.status === 'completed'
        ? completedGoalList
        : inProgressGoalList;
      goalList.append(listItem);
    });
  }

  goalForm.addEventListener('submit', event => {
    event.preventDefault();
    const goalName = goalNameInput.value.trim();
    if (goalName.length === 0) {
      goalError.textContent = 'Enter a description for your goal or expectation.';
      goalNameInput.setAttribute('aria-invalid', 'true');
      goalNameInput.focus();
      return;
    }

    const progressGoal = {
      id: nextGoalId,
      name: goalName,
      status: goalStatusSelect.value
    };
    const nextProgressTracker = { goals: [...progressTracker.goals, progressGoal] };
    if (!saveProgressTracker(nextProgressTracker)) return;

  // Update the saved state before rendering so the page reflects the newly saved marker.
    nextGoalId += 1;
    progressTracker = nextProgressTracker;
    renderProgressGoals();
    goalForm.reset();
    goalError.textContent = '';
    saveError.textContent = '';
    goalNameInput.removeAttribute('aria-invalid');
    goalNameInput.focus();
    saveStatus.textContent = 'Goal/Expectation saved in this browser.';
  });

  renderProgressGoals();
})();
