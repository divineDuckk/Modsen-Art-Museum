import { FC, MouseEventHandler, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setPage } from '../../store/slices/gallerySlice';
import {
  MAX_VISIBLE_PAGE,
  NUM_TO_HIDE,
  Pages,
  REQUIRED_REMAINDER_TO_MOVE_BACK,
  REQUIRED_REMAINDER_TO_MOVE_FORWARD,
} from './constants';
import { StyledSwitcher, Switchers, ToNextButton } from './styled';

export const SwitcherPage: FC = () => {
  const [value1, setValue1] = useState(Pages.FirstPage);
  const [value2, setValue2] = useState(Pages.SecondPage);
  const [value3, setValue3] = useState(Pages.ThirdPage);
  const [value4, setValue4] = useState(Pages.FourthPage);
  const activePage = useSelector(
    (state: RootState) => state.gallery.activePage
  );

  const dispatch = useDispatch();
  const choosePage: MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.target as HTMLButtonElement;
    const buttonText = target.textContent ?? String(Pages.FirstPage);
    const value: number = buttonText ? parseInt(buttonText) : Pages.FirstPage;
    dispatch(setPage(value));
  };
  const toNextPageArt = (): void => {
    dispatch(setPage(activePage + 1));
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

  return (
    <Switchers>
      <ToNextButton
        onClick={toPrevPageArt}
        reversed
        needToHide={activePage < NUM_TO_HIDE}
      >
        <svg
          width="10"
          height="15"
          viewBox="0 0 10 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.46791 13.7144L3 15L9.42788 7.33956L8.9266 6.91893L8.94602 6.89579L1.28558 0.467911L-1.07377e-07 2L6.62963 7.56292L1.46791 13.7144Z"
            fill="#393939"
          />
        </svg>
      </ToNextButton>
      <StyledSwitcher onClick={choosePage} is_active={activePage === value1}>
        {value1}
      </StyledSwitcher>
      <StyledSwitcher onClick={choosePage} is_active={activePage === value2}>
        {value2}
      </StyledSwitcher>
      <StyledSwitcher onClick={choosePage} is_active={activePage === value3}>
        {value3}
      </StyledSwitcher>
      <StyledSwitcher onClick={choosePage} is_active={activePage === value4}>
        {value4}
      </StyledSwitcher>
      <ToNextButton onClick={toNextPageArt}>
        <svg
          width="10"
          height="15"
          viewBox="0 0 10 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.46791 13.7144L3 15L9.42788 7.33956L8.9266 6.91893L8.94602 6.89579L1.28558 0.467911L-1.07377e-07 2L6.62963 7.56292L1.46791 13.7144Z"
            fill="#393939"
          />
        </svg>
      </ToNextButton>
    </Switchers>
  );
};
