export const completeTour = () =>
  localStorage.setItem('tourCompleted', true);

export const resetTour = () =>
  localStorage.removeItem('tourCompleted');

export const isTourCompleted = () =>
  Boolean(localStorage.getItem('tourCompleted'));
