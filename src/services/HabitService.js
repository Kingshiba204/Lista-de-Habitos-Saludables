const STORAGE_KEY = 'habits';

export function getHabits() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveHabits(habits) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
}
