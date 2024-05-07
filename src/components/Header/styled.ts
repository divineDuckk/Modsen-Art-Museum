import styled from 'styled-components';
import { BurgerMenu, HomeButtonAttrs } from './types';
export const StyledHeader = styled.header`
  background: linear-gradient(
    90deg,
    #343333 38.05%,
    #484848 69.22%,
    #282828 98.98%
  );
  padding: 0 16.66%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 127px;
  z-index: 1;
  margin-bottom: ${({ theme }) => theme.margins[8]}px;
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    & {
      padding: 0;
      width: 100%;
      position: fixed;
      top: 0;
      height: 127px;
      justify-content: space-around;
    }
  }
`;
export const FavButton = styled.button`
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
export const HomeButton = styled(FavButton)<HomeButtonAttrs>`
  display: flex;
  align-items: center;
  visibility: ${({ on_home_page }) => (on_home_page ? 'hidden' : 'visible')};
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    & {
      display: ${({ on_home_page }) => (on_home_page ? 'none' : 'flex')};
    }
  }
`;
export const ButtonsWrapper = styled.nav<BurgerMenu>`
  display: flex;
  gap: ${({ theme }) => theme.gaps[2]}px;
  transform: translateX(${({ is_open }) => (is_open ? '100%' : 0)});
  transition: transform 0.3s ease-out;

  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    & {
      position: fixed;
      top: 0;
      left: -200px;
      flex-direction: column;
      width: 200px;
      height: 100%;
      background: ${({ theme }) => theme.colors['primary']};
      padding-left: ${({ theme }) => theme.paddings[4]}px;
      padding-top: ${({ theme }) => theme.paddings[6]}px;
    }
  }
`;

export const BurgerButton = styled.button`
  border: 0;
  width: 30px;
  background-color: transparent;
  display: none;
  cursor: pointer;
  align-items: center;
  svg {
    width: 40px;
    height: 40px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    & {
      display: flex;
    }
  }
`;
