import { PADD_PERSENT } from '@/constants/constants';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BurgerMenu } from './types';

const D_HEADER_HEIGHT = 127;
const S_HEADER_HEIGHT = 100;

const BUTTONS_WRAPPER_WIDTH = 200;

const BURGER_ICON_SIZE = 40;

export const ContentHeader = styled.header`
  background: linear-gradient(
    90deg,
    #343333 38.05%,
    #484848 69.22%,
    #282828 98.98%
  );
  padding: 0 ${PADD_PERSENT}%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${D_HEADER_HEIGHT}px;
  z-index: 1;
  margin-bottom: ${({ theme }) => theme.margins[8]}px;
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    & {
      padding: 0;
      width: 100%;
      position: fixed;
      top: 0;
      justify-content: space-around;
      height: ${S_HEADER_HEIGHT}px;
    }
  }
`;
export const HeaderModsenLogo = styled.img``;

export const FavButton = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  line-height: ${({ theme }) => theme.lineHeights[4]}px;
  color: white;
  cursor: pointer;
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gaps[0]}px;
`;
export const HomeButton = styled(FavButton)``;
export const HomeIcon = styled.img``;

export const ButtonsWrapper = styled.nav<BurgerMenu>`
  display: flex;
  gap: ${({ theme }) => theme.gaps[2]}px;
  transform: translateX(${({ $is_open }) => ($is_open ? '100%' : 0)});
  transition: transform 0.3s ease-out;
  z-index: 2;
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    & {
      position: fixed;
      top: 0;
      left: -${BUTTONS_WRAPPER_WIDTH}px;
      flex-direction: column;
      width: ${BUTTONS_WRAPPER_WIDTH}px;
      height: 100%;
      background: ${({ theme }) => theme.colors['primary']};
      padding-left: ${({ theme }) => theme.paddings[4]}px;
      padding-top: ${({ theme }) => theme.paddings[6]}px;
    }
  }
`;
export const DarkWrapper = styled.div`
  top: 0;
  right: 0;
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;
export const BurgerButton = styled.button`
  border: 0;
  background-color: transparent;
  display: none;
  cursor: pointer;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    & {
      display: flex;
    }
  }
`;
export const BurgerIcon = styled.img`
  width: ${BURGER_ICON_SIZE}px;
  height: ${BURGER_ICON_SIZE}px;
`;
