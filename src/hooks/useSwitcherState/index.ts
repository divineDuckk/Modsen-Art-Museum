import {
  getPageFromSessionStorage,
  getSwitcherPagesFromSessionStorage,
} from '@/utils/functions';
import { useEffect, useState } from 'react';

import { Pages } from '@/components/switcher-page/constants';

export const useSwitcherState = (
  setActivePage: (page: number) => void,
  initial: number[] = [
    Pages.FirstPage,
    Pages.SecondPage,
    Pages.ThirdPage,
    Pages.FourthPage,
  ]
) => {
  const [pagesArr, setPagesArr] = useState<number[]>(initial);

  useEffect(() => {
    const pages = getSwitcherPagesFromSessionStorage();
    const page = getPageFromSessionStorage();
    setActivePage(page);
    setPagesArr(pages);
  }, []);
  return { pagesArr, setPagesArr };
};
