import styled from 'styled-components';
import { BgColorProps } from './types';
export const ArtImage = styled.img`
  width: 387px;
  height: 444px;
  cursor: pointer;
  transition: 0.3s;
  opacity: 0.92;
  &:hover {
    opacity: 1;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    & {
      width: 300px;
      height: 380px;
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
  width: 219px;
`;
export const CONTAINER_HEIGHT = 132 / -2.4;
export const Info = styled.section`
  display: flex;
  align-items: center;
  position: absolute;
  padding: ${({ theme }) => theme.paddings[3]}px
    ${({ theme }) => theme.paddings[4]}px;
  background: ${({ theme }) => theme.colors['white']};
  justify-content: space-between;
  width: 334px;
  bottom: ${CONTAINER_HEIGHT}px;
`;
export const AddToFavButton = styled.button<BgColorProps>`
  width: 59px;
  height: 59px;
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
  width: 19px;
  height: 21px;
`;
