import styled from 'styled-components';
import { SwitcherProps, ToNextButtonProps } from './types';

export const Switchers = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps[0]}px;
  align-items: center;
`;

export const ToNextButton = styled.button<ToNextButtonProps>`
  border: 0;
  border-radius: 3px;
  width: 30px;
  background: transparent;
  height: 30px;
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
export const StyledSwitcher = styled.button<SwitcherProps>`
  border: 0;
  border-radius: 3px;
  width: 30px;
  height: 30px;
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
