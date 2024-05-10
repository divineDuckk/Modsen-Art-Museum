export const pushPageToLocalStorage = (activePage: number): void => {
  localStorage.setItem('activePage', String(activePage));
};
