import { Pages } from '@/components/switcher-page/constants';

export const getPageFromSessionStorage = (): number => {
  const activePage = sessionStorage.getItem('activePage');
  if (activePage) return +activePage;
  return Pages.FirstPage;
};
