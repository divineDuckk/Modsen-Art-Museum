import styled from 'styled-components';
export const StyledTitle = styled.h1`
  width: 684px;
  font-size: ${({ theme }) => theme.fontSizes[6]}px;
  line-height: ${({ theme }) => theme.lineHeights[7]}px;
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.margins[8]}px;
  color: ${({ theme }) => theme.colors['primary']};
  span {
    svg {
      transform: translateY(15px);
    }
    color: ${({ theme }) => theme.colors['hOrange']};
  }
`;
