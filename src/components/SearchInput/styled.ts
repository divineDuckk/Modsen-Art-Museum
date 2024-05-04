import styled from 'styled-components';

export const InputDiv = styled.div`
  position: relative;
  svg {
    position: absolute;
    top: 25%;
    right: 16px;
    cursor: pointer;
  }
  margin-bottom: ${({ theme }) => theme.margins[7]}px;
`;

export const StyledInput = styled.input.attrs(() => ({
  type: 'text',
  placeholder: 'Search Art, Artist, Work...',
}))`
  width: 762px;
  height: 64px;
  border-radius: 16px;
  border: 0;
  background: rgba(57, 57, 57, 0.05);
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  padding-left: ${({ theme }) => theme.paddings[1]}px;
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  &::placeholder {
    font-weight: ${({ theme }) => theme.fontWeights[0]};
    font-family: 'Inter';
    font-size: ${({ theme }) => theme.fontSizes[0]}px;
    line-height: ${({ theme }) => theme.lineHeights[0]}px;
  }
  &::-webkit-input-placeholder {
    font-family: 'Inter', Arial, Helvetica, sans-serif;
  }

  &:-ms-input-placeholder {
    font-family: 'Inter', Arial, Helvetica, sans-serif;
  }

  &:-moz-placeholder {
    font-family: 'Inter', Arial, Helvetica, sans-serif;
  }

  &::-moz-placeholder {
    font-family: 'Inter', Arial, Helvetica, sans-serif;
  }
  &:active,
  &:focus {
    border: 0;
    outline: none;
  }
`;
