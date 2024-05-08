import styled from 'styled-components';

export const ContentFavoritePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const EmptyFavs = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const EmptyFavsParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
  margin-bottom: ${({ theme }) => theme.margins[3]}px;
`;
export const EmptyFavsImage = styled.img`
  margin-bottom: ${({ theme }) => theme.margins[2]}px;
`;
