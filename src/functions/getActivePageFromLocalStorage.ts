import { Pages } from '@/components/SwitcherPage/constants';

export const getPageFromLocalStorage = (): number => {
  const activePage = localStorage.getItem('activePage');
  console.log(activePage);
  if (activePage) return +activePage;
  return Pages.FirstPage;
};
