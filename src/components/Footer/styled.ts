import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 0 16.66%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 127px;
  background-color: ${({ theme }) => theme.colors['white']};
`;
