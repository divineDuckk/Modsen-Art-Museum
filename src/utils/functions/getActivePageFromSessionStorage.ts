import { Pages } from '@/components/SwitcherPage/constants';

export const getPageFromSessionStorage = (): number => {
  const activePage = sessionStorage.getItem('activePage');
  if (activePage) return +activePage;
  return Pages.FirstPage;
};
