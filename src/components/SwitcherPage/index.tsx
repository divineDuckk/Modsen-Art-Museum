import arrow from '@/assets/arrow.svg';
import { getPageFromLocalStorage, pushPageToLocalStorage } from '@/functions';
import { useAppDispatch } from '@/store/hooks';
import { numOfActivePage } from '@/store/selectors/gallerySelectors';
import { setPage } from '@/store/slices/gallerySlice';
import { FC, MouseEventHandler, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  MAX_VISIBLE_PAGE,
  NUM_TO_HIDE,
  Pages,
  REQUIRED_REMAINDER_TO_MOVE_BACK,
  REQUIRED_REMAINDER_TO_MOVE_FORWARD,
} from './constants';
import { StyledSwitcher, Switchers, ToNextButton, ToNextIcon } from './styled';

export const SwitcherPage: FC = () => {
  const activePage = useSelector(numOfActivePage);
  const [value1, setValue1] = useState(Pages.FirstPage);
  const [value2, setValue2] = useState(Pages.SecondPage);
  const [value3, setValue3] = useState(Pages.ThirdPage);
  const [value4, setValue4] = useState(Pages.FourthPage);

  const dispatch = useAppDispatch();
  const choosePage: MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.target as HTMLButtonElement;
    const buttonText = target.textContent ?? String(Pages.FirstPage);
    const value: number = buttonText ? parseInt(buttonText) : Pages.FirstPage;
    dispatch(setPage(value));
    pushPageToLocalStorage(value);
  };
  const toNextPageArt = (): void => {
    dispatch(setPage(activePage + 1));
    pushPageToLocalStorage(activePage + 1);
    if (
      activePage + 1 >= NUM_TO_HIDE &&
      (activePage + 1) % MAX_VISIBLE_PAGE === REQUIRED_REMAINDER_TO_MOVE_FORWARD
    ) {
      setValue1((prev) => prev + MAX_VISIBLE_PAGE);
      setValue2((prev) => prev + MAX_VISIBLE_PAGE);
      setValue3((prev) => prev + MAX_VISIBLE_PAGE);
      setValue4((prev) => prev + MAX_VISIBLE_PAGE);
    }
  };
  const toPrevPageArt = (): void => {
    dispatch(setPage(activePage - 1));
    pushPageToLocalStorage(activePage - 1);

    if (
      activePage >= NUM_TO_HIDE &&
      (activePage - 1) % MAX_VISIBLE_PAGE === REQUIRED_REMAINDER_TO_MOVE_BACK
    ) {
      setValue1((prev) => prev - MAX_VISIBLE_PAGE);
      setValue2((prev) => prev - MAX_VISIBLE_PAGE);
      setValue3((prev) => prev - MAX_VISIBLE_PAGE);
      setValue4((prev) => prev - MAX_VISIBLE_PAGE);
    }
  };
  useEffect(() => {
    const page = getPageFromLocalStorage();
    dispatch(setPage(page));
    switch (page % MAX_VISIBLE_PAGE) {
      case 0:
        setValue4(page);
        setValue3(page - Pages.FirstPage);
        setValue2(page - Pages.SecondPage);
        setValue1(page - Pages.ThirdPage);
        break;
      case 1:
        setValue4(page + Pages.ThirdPage);
        setValue3(page + Pages.SecondPage);
        setValue2(page + Pages.FirstPage);
        setValue1(page);
        break;
      case 2:
        setValue4(page + Pages.SecondPage);
        setValue3(page + Pages.FirstPage);
        setValue2(page);
        setValue1(page - Pages.FirstPage);
        break;
      case 3:
        setValue4(page + Pages.FirstPage);
        setValue3(page);
        setValue2(page - Pages.FirstPage);
        setValue1(page - Pages.SecondPage);
        break;
    }
  }, []);
  return (
    <Switchers>
      <ToNextButton
        onClick={toPrevPageArt}
        $reversed
        $needtohide={activePage < NUM_TO_HIDE}
      >
        <ToNextIcon
          src={arrow}
          alt="to next page"
          $reversed
          $needtohide={activePage < NUM_TO_HIDE}
        />
      </ToNextButton>
      <StyledSwitcher onClick={choosePage} $is_active={activePage === value1}>
        {value1}
      </StyledSwitcher>
      <StyledSwitcher onClick={choosePage} $is_active={activePage === value2}>
        {value2}
      </StyledSwitcher>
      <StyledSwitcher onClick={choosePage} $is_active={activePage === value3}>
        {value3}
      </StyledSwitcher>
      <StyledSwitcher onClick={choosePage} $is_active={activePage === value4}>
        {value4}
      </StyledSwitcher>
      <ToNextButton onClick={toNextPageArt}>
        <ToNextIcon src={arrow} alt="to next page" />
      </ToNextButton>
    </Switchers>
  );
};
