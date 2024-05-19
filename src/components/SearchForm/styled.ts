import styled from 'styled-components';
import { DropMenuAttr } from './types';

const FORM_WIDTH = 762;

const CLEAR_BUTTON_MAX_WIDTH_PERSENT = 15;
const CLEAR_BUTTON_BORDER_RADIUS = 16;

const D_DROPMENU_BUTTON_WIDTH = 220;
const S_DROPMENU_BUTTON_WIDTH = 200;
const DROPMENU_BUTTON_BORDER_RADIUS = 16;

const DROPDONW_ICON_TOP_POS = 13;
const DROPDONW_ICON_RIGHT_POS = 15;

const DROPMENU_LEFT_POS = 86;
const DROPMENU_TOP_POS = 35;

const SEARCH_BUTTON_RIGHT_POS = 20;
const SEARCH_BUTTON_SIZE = 30;

const SEARCH_INPUT_HEIGHT = 64;
const SEARCH_INPUT_BORDER_RADIUS = 16;

export const Form = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  width: ${FORM_WIDTH}px;
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
  max-width: ${CLEAR_BUTTON_MAX_WIDTH_PERSENT}%;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  padding: ${({ theme }) => theme.paddings[0]}px
    ${({ theme }) => theme.paddings[4]}px;
  cursor: pointer;
  border: 0;
  background-color: white;
  border-radius: ${CLEAR_BUTTON_BORDER_RADIUS}px;
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
  width: ${D_DROPMENU_BUTTON_WIDTH}px;
  position: relative;
  border: 0;
  border-radius: ${DROPMENU_BUTTON_BORDER_RADIUS}px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  padding: ${({ theme }) => theme.paddings[0]}px
    ${({ theme }) => theme.paddings[5]}px;
  background-color: white;
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    & {
      width: ${S_DROPMENU_BUTTON_WIDTH}px;
      font-size: ${({ theme }) => theme.fontSizes[1]}px;
    }
  }
`;
export const DropDownIcon = styled.img`
  position: absolute;
  right: ${DROPDONW_ICON_RIGHT_POS}px;
  top: ${DROPDONW_ICON_TOP_POS}px;
  transform: rotate(95deg);
`;
export const SortByList = styled.ul`
  padding: ${({ theme }) => theme.paddings[0]}px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.gaps[0]}px;
  background-color: white;
`;
export const ListElem = styled.li`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  width: 100%;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: rgba(90, 255, 255, 0.6);
  }
`;
export const DropMenu = styled.div<DropMenuAttr>`
  position: absolute;
  background-color: white;
  border-radius: ${DROPMENU_BUTTON_BORDER_RADIUS}px;
  width: ${D_DROPMENU_BUTTON_WIDTH}px;
  top: ${DROPMENU_TOP_POS}px;
  left: ${DROPMENU_LEFT_POS}px;
  display: ${({ $visibility }) => ($visibility ? 'block' : 'none')};
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    & {
      width: ${S_DROPMENU_BUTTON_WIDTH}px;
      font-size: ${({ theme }) => theme.fontSizes[1]}px;
    }
  }
`;
export const SearchButton = styled.button`
  position: absolute !important;
  right: ${SEARCH_BUTTON_RIGHT_POS}px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  width: ${SEARCH_BUTTON_SIZE}px;
  height: ${SEARCH_BUTTON_SIZE}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SearchIcon = styled.img``;
export const SearchInput = styled.input.attrs(() => ({
  type: 'text',
  placeholder: 'Search Art, Artist, Work...',
}))`
  box-sizing: border-box;
  width: 100%;
  height: ${SEARCH_INPUT_HEIGHT}px;
  border-radius: ${SEARCH_INPUT_BORDER_RADIUS}px;
  border: 0;
  background: rgba(57, 57, 57, 0.05);
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  padding-left: ${({ theme }) => theme.paddings[2]}px;
  padding-right: ${({ theme }) => theme.paddings[7]}px;
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
