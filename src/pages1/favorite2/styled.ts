import styled from 'styled-components';

const IMAGE_WIDTH = 200;

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
  width: ${IMAGE_WIDTH}px;
  margin-bottom: ${({ theme }) => theme.margins[2]}px;
`;
export const BigFavIcon = styled.img`
  transform: translateY(15px);
`;
