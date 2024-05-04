import styled from 'styled-components';

export const StyledGroup = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.margins[6]}px;
`;
export const SwitcherWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;
