export const getSwitcherPagesFromSessionStorage = (): number[] => {
  const pages = sessionStorage.getItem('pages');
  if (pages) return JSON.parse(pages);
  return [1, 2, 3, 4];
};
