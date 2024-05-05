import styled from 'styled-components';

export const StyledGroup = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 387px);
  gap: ${({ theme }) => theme.gaps[6]}px;
  margin-bottom: ${({ theme }) => theme.margins[7]}px;
  @media (max-width: 1350px) {
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
