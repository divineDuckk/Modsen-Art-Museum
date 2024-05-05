import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  width: 762px;
`;
export const FormWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.margins[8]}px;
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: flex-end;
`;
export const ErrorMsg = styled.div`
  font-family: 'Inter';
  color: ${({ theme }) => theme.colors['red']};
  padding-left: ${({ theme }) => theme.paddings[1]}px;
`;
export const ClearButton = styled.button`
  max-width: 15%;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  padding: ${({ theme }) => theme.paddings[0]}px
    ${({ theme }) => theme.paddings[4]}px;
  cursor: pointer;
  border: 0;
  background-color: white;
  border-radius: 16px;
  transition: 0.2s;
  &:hover {
    background-color: rgba(80, 255, 255, 0.8);
  }
`;
export const SearchButton = styled.button`
  position: absolute !important;
  right: 20px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledInput = styled.input.attrs(() => ({
  type: 'text',
  placeholder: 'Search Art, Artist, Work...',
}))`
  box-sizing: border-box;
  width: 100%;
  height: 64px;
  border-radius: 16px;
  border: 0;
  background: rgba(57, 57, 57, 0.05);
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  padding-left: ${({ theme }) => theme.paddings[2]}px;
  padding-right: ${({ theme }) => theme.paddings[6]}px;
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
