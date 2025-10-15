export function getFromLocalStorage<T>(name: string, defaultValue: T) {
  const localStorageitems = localStorage.getItem(name);
  const items: T = localStorageitems
    ? JSON.parse(localStorageitems)
    : defaultValue;
  return items;
}
export function setToLocalStorage<T>(name: string, data: T) {
  localStorage.setItem(name, JSON.stringify(data));
}
