import styled, { keyframes } from 'styled-components';
import { AnotherStyledGalleryAttr } from './types';

const CARD_WIDTH = 416;
const CARD_HEIGHT = 130;

export const AnotherGalleryGroup = styled.div<AnotherStyledGalleryAttr>`
  display: ${({ $display_flex }) => ($display_flex ? 'flex' : 'grid')};
  grid-template-rows: repeat(${({ $rows }) => $rows}, ${CARD_HEIGHT}px);
  grid-template-columns: repeat(${({ $colums }) => $colums}, ${CARD_WIDTH}px);
  gap: ${({ theme }) => theme.gaps[2]}px;
  margin-bottom: ${({ theme }) => theme.margins[8]}px;
  @media (max-width: ${({ theme }) => theme.breakPoints[2]}px) {
    & {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoints[1]}px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

const skeletonAnimation = keyframes`
  0% {
    background-position: -${CARD_WIDTH}px 0;
  }
  100% {
    background-position: ${CARD_HEIGHT} 0;
  }
`;

export const CardSkeleton = styled.div`
  width: ${CARD_WIDTH};
  height: ${CARD_HEIGHT};
  background-color: #f2f2f2;
  background-image: linear-gradient(90deg, #f2f2f2, #e6e6e6, #f2f2f2);
  animation: ${skeletonAnimation} 1.5s ease-in-out infinite;
`;
