export const pushSwitcherPagesToSessionStorage = (pages: number[]): void => {
  sessionStorage.setItem('pages', JSON.stringify(pages));
};
