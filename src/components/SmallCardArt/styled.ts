import styled from 'styled-components';
import { TextInfo } from '../CardArt/styled';
export const SmallStyledCardArt = styled.div`
  padding: ${({ theme }) => theme.paddings[5]}px
    ${({ theme }) => theme.paddings[1]}px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gaps[2]}px;
  background-color: ${({ theme }) => theme.colors['white']};
`;
export const LittleArtImage = styled.img`
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: 0.3s;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;
export const SmallTextInfo = styled(TextInfo)`
  font-family: 'Inter';
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    & {
      width: 175px;
    }
  }
`;
