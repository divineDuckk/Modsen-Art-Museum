import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 16.66%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 0 auto;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    & {
      margin: 0;
    }
  }
`;
