import styled from 'styled-components';
import { DropMenuAttr } from './types';

export const Form = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  width: 762px;
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    & {
      width: 100%;
    }
  }
`;
export const FormWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.margins[8]}px;
  display: flex;
  flex-direction: column;
  justify-content: right;
`;
export const ErrorMsg = styled.div`
  font-family: 'Inter';
  color: ${({ theme }) => theme.colors['red']};
  padding-left: ${({ theme }) => theme.paddings[1]}px;
`;
export const FlexDiv = styled.div`
  font-family: 'Inter';
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  display: flex;
  justify-content: space-between;
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
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    & {
      padding: ${({ theme }) => theme.paddings[0]}px
        ${({ theme }) => theme.paddings[0]}px;
    }
  }
`;
export const SortDiv = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${({ theme }) => theme.paddings[2]}px;
  gap: ${({ theme }) => theme.gaps[1]}px;
  position: relative;
`;
export const ShowDropMenuButton = styled.button`
  cursor: pointer;
  width: 220px;
  position: relative;
  border: 0;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  padding: ${({ theme }) => theme.paddings[0]}px
    ${({ theme }) => theme.paddings[5]}px;
  background-color: white;
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    & {
      width: 200px;
      font-size: ${({ theme }) => theme.fontSizes[1]}px;
    }
  }
  svg {
    position: absolute;
    right: 15px;
    top: 13px;
    transform: rotate(95deg);
  }
`;
export const DropMenu = styled.div<DropMenuAttr>`
  position: absolute;
  background-color: white;
  border-radius: 16px;
  width: 220px;
  top: 35px;
  left: 86px;
  visibility: ${({ visibility }) => (visibility ? 'visible' : 'hidden')};
  ul {
    padding: ${({ theme }) => theme.paddings[0]}px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.gaps[0]}px;
    li {
      text-align: center;
      font-size: ${({ theme }) => theme.fontSizes[2]}px;
      background-color: white;
      width: 100%;
      transition: 0.2s;
      cursor: pointer;
      &:hover {
        background-color: rgba(90, 255, 255, 0.6);
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    & {
      width: 200px;
      font-size: ${({ theme }) => theme.fontSizes[1]}px;
    }
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
