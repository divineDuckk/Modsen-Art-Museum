import { FC, MouseEventHandler, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setPage } from '../../store/slices/gallerySlice';
import { StyledSwitcher, Switchers, ToNextButton } from './styled';
const NUM_TO_HIDE = 5;
export const SwitcherPage: FC = () => {
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(2);
  const [value3, setValue3] = useState(3);
  const [value4, setValue4] = useState(4);
  const activePage = useSelector(
    (state: RootState) => state.gallery.activePage
  );

  const dispatch = useDispatch();
  const choosePage: MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.target as HTMLButtonElement;
    const buttonText = target.textContent ?? '1';
    const value: number = buttonText ? parseInt(buttonText) : 1;
    dispatch(setPage(value));
  };
  const toNextPageArt = (): void => {
    dispatch(setPage(activePage + 1));
    if (activePage + 1 >= 5 && (activePage + 1) % 4 === 1) {
      setValue1((prev) => prev + 4);
      setValue2((prev) => prev + 4);
      setValue3((prev) => prev + 4);
      setValue4((prev) => prev + 4);
    }
  };
  const toPrevPageArt = (): void => {
    dispatch(setPage(activePage - 1));
    if (activePage >= 5 && (activePage - 1) % 4 === 0) {
      setValue1((prev) => prev - 4);
      setValue2((prev) => prev - 4);
      setValue3((prev) => prev - 4);
      setValue4((prev) => prev - 4);
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
