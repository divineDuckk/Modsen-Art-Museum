import styled from 'styled-components';
export const StyledHeader = styled.header`
  background: linear-gradient(
    90deg,
    #343333 38.05%,
    #484848 69.22%,
    #282828 98.98%
  );
  padding: 0 16.66%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 127px;
  margin-bottom: ${({ theme }) => theme.margins[8]}px;
`;
export const FavButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  line-height: ${({ theme }) => theme.lineHeights[4]}px;
  color: white;
  cursor: pointer;
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gaps[0]}px;
`;
