import {
  getPageFromSessionStorage,
  getSwitcherPagesFromSessionStorage,
} from '@/utils/functions';
import { useEffect, useState } from 'react';

import { Pages } from '@/components/SwitcherPage/constants';

export const useSwitcherState = (setActivePage: (page: number) => void) => {
  const [pagesArr, setPagesArr] = useState<number[]>([
    Pages.FirstPage,
    Pages.SecondPage,
    Pages.ThirdPage,
    Pages.FourthPage,
  ]);

  useEffect(() => {
    const pages = getSwitcherPagesFromSessionStorage();
    const page = getPageFromSessionStorage();
    setActivePage(page);
    setPagesArr(pages);
  }, []);
  return { pagesArr, setPagesArr };
};
