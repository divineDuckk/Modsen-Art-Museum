import styled from 'styled-components';

export const StyledFavoritePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const EmptyFavs = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: ${({ theme }) => theme.fontSizes[5]}px;
    margin-bottom: ${({ theme }) => theme.margins[3]}px;
  }
  img {
    margin-bottom: ${({ theme }) => theme.margins[2]}px;
  }
`;
