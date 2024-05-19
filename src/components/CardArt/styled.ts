import styled from 'styled-components';
import { BgColorProps } from './types';

const D_IMAGE_WIDTH = 387;
const D_IMAGE_HEIGHT = 444;

const S_IMAGE_WIDTH = 300;
const S_IMAGE_HEIGHT = 380;

const TEXT_INFO_WIDTH = 219;
const INFO_BOTTOM_VALUE = -55;
const INFO_SECTION_WIDTH = 334;

const FAV_BUTTON_SIZE = 59;
const FAV_ICON_WIDTH = 19;
const FAV_ICON_HEIGHT = 21;

export const ArtImage = styled.img`
  width: ${D_IMAGE_WIDTH}px;
  height: ${D_IMAGE_HEIGHT}px;
  cursor: pointer;
  transition: 0.3s;
  opacity: 0.92;
  &:hover {
    opacity: 1;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    & {
      width: ${S_IMAGE_WIDTH}px;
      height: ${S_IMAGE_HEIGHT}px;
    }
  }
`;
export const ArtTitle = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  line-height: ${({ theme }) => theme.lineHeights[4]}px;
  letter-spacing: -0.03em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const ArtistName = styled.span`
  color: ${({ theme }) => theme.colors['pOrange']};
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[4]}px;
  letter-spacing: -0.01em;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-sizing: border-box;
`;
export const ArtAccess = styled.b`
  display: block;
  margin-top: ${({ theme }) => theme.margins[1]}px;
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[4]}px;
  letter-spacing: -0.01em;
`;
export const TextInfo = styled.div`
  font-family: 'Lexend Deca';
  color: ${({ theme }) => theme.colors['black']};
  overflow: hidden;
  width: ${TEXT_INFO_WIDTH}px;
`;
export const Info = styled.section`
  display: flex;
  align-items: center;
  position: absolute;
  padding: ${({ theme }) => theme.paddings[3]}px
    ${({ theme }) => theme.paddings[4]}px;
  background: ${({ theme }) => theme.colors['white']};
  justify-content: space-between;
  width: ${INFO_SECTION_WIDTH}px;
  bottom: ${INFO_BOTTOM_VALUE}px;
`;
export const AddToFavButton = styled.button<BgColorProps>`
  width: ${FAV_BUTTON_SIZE}px;
  height: ${FAV_BUTTON_SIZE}px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  cursor: pointer;
  background-color: ${({ $is_active, theme }) =>
    $is_active ? theme.colors['activeBg'] : theme.colors['nonActiveBg']};
`;
export const FavIcon = styled.img`
  width: ${FAV_ICON_WIDTH}px;
  height: ${FAV_ICON_HEIGHT}px;
`;
