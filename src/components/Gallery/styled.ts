import styled from 'styled-components';

export const StyledGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps[6]}px;
`;
