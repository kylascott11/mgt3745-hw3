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
      goalError.textContent = 'Enter a goal or expectation name.';
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
      goalName.textContent = progressGoal.name;
      goalStatus.textContent = progressGoal.status;
      editButton.type = 'button';
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => editProgressGoal(progressGoal, listItem, editButton));
      deleteButton.type = 'button';
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => deleteProgressGoal(progressGoal));
      listItem.append(goalName, goalStatus, editButton, deleteButton);

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
      goalError.textContent = 'Enter a goal or expectation name.';
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
