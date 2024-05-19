import styled from 'styled-components';
import { SwitcherProps, ToNextButtonProps } from './types';

const TO_NEXT_BUTTON_SIZE = 30;
const TO_NEXT_BUTTON_BORDER_RADIUS = 3;

const SWITCHER_SIZE = 30;
const SWITCHER_BORDER_RADIUS = 3;

export const Switchers = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps[0]}px;
  align-items: center;
`;

export const ToNextButton = styled.button<ToNextButtonProps>`
  border: 0;
  border-radius: ${TO_NEXT_BUTTON_BORDER_RADIUS}px;
  width: ${TO_NEXT_BUTTON_SIZE}px;
  height: ${TO_NEXT_BUTTON_SIZE}px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  visibility: ${({ $needtohide }) => ($needtohide ? 'hidden' : 'visible')};
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
export const ToNextIcon = styled.img<ToNextButtonProps>`
  visibility: ${({ $needtohide }) => ($needtohide ? 'hidden' : 'visible')};
  transform: ${({ $reversed }) =>
    $reversed ? 'rotate(-176deg)' : 'rotate(4deg)'};
`;
export const Switcher = styled.button<SwitcherProps>`
  border: 0;
  border-radius: ${SWITCHER_BORDER_RADIUS}px;
  width: ${SWITCHER_SIZE}px;
  height: ${SWITCHER_SIZE}px;
  color: ${({ $is_active, theme }) =>
    $is_active ? theme.colors['white'] : theme.colors['black']};
  background: ${({ $is_active, theme }) =>
    $is_active ? theme.colors['bgOrange'] : 'transparent'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: ${({ $is_active, theme }) =>
      $is_active ? theme.colors['bgOrange'] : 'rgba(0, 0, 0, 0.1)'};
  }
`;
