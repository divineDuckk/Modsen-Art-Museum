import styled from 'styled-components';
import { BgColorProps } from './types';
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  img {
    width: 387px;
    height: 444px;
  }
`;
export const TextInfo = styled.div`
  font-family: 'Lexend Deca';
  color: ${({ theme }) => theme.colors['black']};
  overflow: hidden;
  width: 219px;
  p {
    font-weight: ${({ theme }) => theme.fontWeights[1]};
    font-size: ${({ theme }) => theme.fontSizes[3]}px;
    line-height: ${({ theme }) => theme.lineHeights[4]}px;
    letter-spacing: -0.03em;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  span {
    color: ${({ theme }) => theme.colors['pOrange']};
    font-weight: ${({ theme }) => theme.fontWeights[0]};
    font-size: ${({ theme }) => theme.fontSizes[1]}px;
    line-height: ${({ theme }) => theme.lineHeights[4]}px;
    letter-spacing: -0.01em;
  }
  b {
    display: block;
    margin-top: ${({ theme }) => theme.margins[1]}px;
    font-weight: ${({ theme }) => theme.fontWeights[2]};
    font-size: ${({ theme }) => theme.fontSizes[1]}px;
    line-height: ${({ theme }) => theme.lineHeights[4]}px;
    letter-spacing: -0.01em;
  }
`;
export const Info = styled.section`
  --infoPaddingTopAndBot: ${({ theme }) => theme.paddings[3]}px;
  --infoPaddingLeftAndRight: ${({ theme }) => theme.paddings[4]}px;
  --containerHeight: 132px;
  display: flex;
  align-items: center;
  position: absolute;
  padding: var(--infoPaddingTopAndBot) var(--infoPaddingLeftAndRight);
  background: ${({ theme }) => theme.colors['white']};
  justify-content: space-between;
  width: 334px;
  bottom: calc(var(--containerHeight) / -2.4);
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
  background-color: ${({ is_active, theme }) =>
    is_active ? theme.colors['activeBg'] : theme.colors['nonActiveBg']};
`;
