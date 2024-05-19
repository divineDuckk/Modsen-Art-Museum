export const pushPageToSessionStorage = (activePage: number): void => {
  sessionStorage.setItem('activePage', String(activePage));
};
