import styled from 'styled-components';
import { TextInfo } from '../CardArt/styled';

const LITTLE_ART_IMAGE_SIZE = 80;

const SMALL_TEXT_INFO_WIDTH = 175;

export const SmallStyledCardArt = styled.div`
  padding: ${({ theme }) => theme.paddings[5]}px
    ${({ theme }) => theme.paddings[1]}px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gaps[2]}px;
  background-color: ${({ theme }) => theme.colors['white']};
`;
export const LittleArtImage = styled.img`
  width: ${LITTLE_ART_IMAGE_SIZE}px;
  height: ${LITTLE_ART_IMAGE_SIZE}px;
  cursor: pointer;
  transition: 0.3s;
  opacity: 0.88;
  &:hover {
    opacity: 1;
  }
`;
export const SmallTextInfo = styled(TextInfo)`
  font-family: 'Inter';
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    & {
      width: ${SMALL_TEXT_INFO_WIDTH}px;
    }
  }
`;
