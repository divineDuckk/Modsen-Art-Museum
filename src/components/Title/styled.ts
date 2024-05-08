import styled from 'styled-components';
export const MainTitle = styled.h1`
  width: 684px;
  font-size: ${({ theme }) => theme.fontSizes[6]}px;
  line-height: ${({ theme }) => theme.lineHeights[7]}px;
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.margins[8]}px;
  color: ${({ theme }) => theme.colors['primary']};

  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    & {
      font-size: ${({ theme }) => theme.fontSizes[4]}px;
      margin-bottom: ${({ theme }) => theme.margins[7]}px;
      margin-top: ${({ theme }) => theme.margins[9]}px;

      width: 100%;
    }
  }
`;
export const SubMainText = styled.span`
  color: ${({ theme }) => theme.colors['hOrange']};
`;
export const BigFavIcon = styled.img`
  transform: translateY(15px);
`;
