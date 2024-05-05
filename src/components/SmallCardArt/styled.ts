import styled from 'styled-components';
import { TextInfo } from '../CardArt/styled';
export const SmallStyledCardArt = styled.div`
  padding: ${({ theme }) => theme.paddings[5]}px
    ${({ theme }) => theme.paddings[1]}px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gaps[2]}px;
  background-color: ${({ theme }) => theme.colors['white']};
  img {
    width: 80px;
    height: 80px;
  }
`;
export const SmallTextInfo = styled(TextInfo)`
  font-family: 'Inter';
`;
