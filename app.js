(() => {
  'use strict';

  const storageKey = 'mgt3745.progressTracker.v1';
  const goalForm = document.querySelector('#goalForm');
  const goalNameInput = document.querySelector('#goalName');
  const goalStatusSelect = document.querySelector('#goalStatus');
  const inprogressGoalList = document.querySelector('#inprogressGoalList');
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

  function renderProgressGoals() {
    inprogressGoalList.replaceChildren();
    completedGoalList.replaceChildren();
    emptyState.hidden = progressTracker.goals.length > 0;

    progressTracker.goals.forEach(progressGoal => {
      const listItem = document.createElement('li');
      const goalName = document.createElement('h4');
      const goalStatus = document.createElement('p');
      goalName.textContent = progressGoal.name;
      goalStatus.textContent = progressGoal.status;
      listItem.append(goalName, goalStatus);

      const goalList = progressGoal.status === 'completed'
        ? completedGoalList
        : inprogressGoalList;
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
