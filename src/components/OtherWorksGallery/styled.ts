import styled from 'styled-components';
import { AnotherStyledGalleryAttr } from './types';

export const AnotherStyledGallery = styled.div<AnotherStyledGalleryAttr>`
  display: ${({ displayFlex }) => (displayFlex ? 'flex' : 'grid')};
  grid-template-rows: repeat(3, 130px);
  grid-template-columns: repeat(3, 416px);
  gap: ${({ theme }) => theme.gaps[2]}px;
  margin-bottom: ${({ theme }) => theme.margins[8]}px;
  @media (max-width: 1350px) {
    & {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
    }
  }

  @media (max-width: 925px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;
