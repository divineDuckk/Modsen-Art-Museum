import {
  pushPageToSessionStorage,
  pushSwitcherPagesToSessionStorage,
} from '@/utils/functions';
import { FC } from 'react';
import {
  MAX_VISIBLE_PAGE,
  NUM_TO_HIDE,
  Pages,
  REQUIRED_REMAINDER_TO_MOVE_BACK,
  REQUIRED_REMAINDER_TO_MOVE_FORWARD,
} from './constants';

import arrow from '@/assets/arrow.svg';
import { useSwitcherState } from '@/hooks/useSwitcherState';

import { Switcher, Switchers, ToNextButton, ToNextIcon } from './styled';
import { SwitcherPageProps } from './types';

export const SwitcherPage: FC<SwitcherPageProps> = ({
  activePage,
  setActivePage,
}) => {
  const { pagesArr, setPagesArr } = useSwitcherState(setActivePage);

  const choosePage = (num: number) => () => {
    setActivePage(num);
    pushPageToSessionStorage(num);
    pushSwitcherPagesToSessionStorage(pagesArr);
  };

  const toNextPageArt = () => {
    setActivePage(activePage + Pages.FirstPage);
    pushPageToSessionStorage(activePage + Pages.FirstPage);

    if (
      activePage + Pages.FirstPage >= NUM_TO_HIDE &&
      (activePage + Pages.FirstPage) % MAX_VISIBLE_PAGE ===
        REQUIRED_REMAINDER_TO_MOVE_FORWARD
    ) {
      setPagesArr((prev) => prev.map((page) => page + MAX_VISIBLE_PAGE));
      pushSwitcherPagesToSessionStorage(
        pagesArr.map((page) => page + MAX_VISIBLE_PAGE)
      );
    }
  };

  const toPrevPageArt = () => {
    setActivePage(activePage - Pages.FirstPage);
    pushPageToSessionStorage(activePage - Pages.FirstPage);

    if (
      activePage >= NUM_TO_HIDE &&
      (activePage - Pages.FirstPage) % MAX_VISIBLE_PAGE ===
        REQUIRED_REMAINDER_TO_MOVE_BACK
    ) {
      setPagesArr((prev) => prev.map((page) => page - MAX_VISIBLE_PAGE));
      pushSwitcherPagesToSessionStorage(
        pagesArr.map((page) => page - MAX_VISIBLE_PAGE)
      );
    }
  };

  return (
    <Switchers>
      <ToNextButton
        onClick={toPrevPageArt}
        $reversed
        $needtohide={activePage < NUM_TO_HIDE}
        data-testid="SwitcherButton"
      >
        <ToNextIcon
          src={arrow}
          alt="to next page"
          $reversed
          $needtohide={activePage < NUM_TO_HIDE}
        />
      </ToNextButton>

      {pagesArr.map((page, i) => (
        <Switcher
          key={i}
          onClick={choosePage(page)}
          $is_active={activePage === page}
        >
          {page}
        </Switcher>
      ))}
      <ToNextButton onClick={toNextPageArt} data-testid="SwitcherButton">
        <ToNextIcon src={arrow} alt="to next page" />
      </ToNextButton>
    </Switchers>
  );
};
