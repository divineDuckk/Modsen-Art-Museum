import styled from 'styled-components';

export const Group = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 387px);
  gap: ${({ theme }) => theme.gaps[6]}px;
  margin-bottom: ${({ theme }) => theme.margins[7]}px;
  @media (max-width: ${({ theme }) => theme.breakPoints[2]}px) {
    & {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: auto;
    }
  }
`;
export const SwitcherWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  margin-bottom: ${({ theme }) => theme.margins[8]}px;
`;
export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 444px;
  margin-bottom: ${({ theme }) => theme.margins[7]}px;
`;
