import styled from 'styled-components';
import { AnotherStyledGalleryAttr } from './types';

export const AnotherStyledGallery = styled.div<AnotherStyledGalleryAttr>`
  display: ${({ displayFlex }) => (displayFlex ? 'flex' : 'grid')};
  grid-template-rows: repeat(${({ rows }) => rows}, 130px);
  grid-template-columns: repeat(${({ colums }) => colums}, 416px);
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
