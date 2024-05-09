import { SORT_VALUES } from '@/constants/constants';

import { useAppDispatch } from '@/store/hooks';
import { isNeedRenderSearchContent } from '@/store/selectors/searchGallerySelectors';
import {
  setNeedToRenderSearchContent,
  setSearchedArts,
} from '@/store/slices/searchedGallerySlice';
import { fetchResultsOfSearch } from '@/store/thunks/fetchResultOfSearch';
import { useFormik } from 'formik';
import { FC, MouseEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { object, string } from 'yup';
import { MAX_LENGTH, MAX_MESSAGE, MIN_LENGTH, MIN_MESSAGE } from './constants';
import {
  ClearButton,
  DropDownIcon,
  DropMenu,
  ErrorMsg,
  FlexDiv,
  Form,
  FormWrapper,
  ListElem,
  SearchButton,
  SearchIcon,
  SearchInput,
  ShowDropMenuButton,
  SortByList,
  SortDiv,
} from './styled';
export const SearhForm: FC = () => {
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [sortByValue, setSortByValue] = useState(SORT_VALUES[0]);
  const needToRenderResults = useSelector(isNeedRenderSearchContent);
  const onClickLi = (e: MouseEvent<HTMLLIElement>) => {
    setIsVisible(false);
    setSortByValue(e.currentTarget.innerText);
  };
  const onClickSortButton = () => {
    setIsVisible(!isVisible);
  };
  const searchHandler = async (values: { text: string }) => {
    try {
      dispatch(setNeedToRenderSearchContent(true));
      dispatch(fetchResultsOfSearch({ text: values.text, sortByValue }));
    } catch (e) {
      console.log(e);
    }
  };
  const formik = useFormik({
    initialValues: {
      text: '',
    },
    onSubmit: searchHandler,
    validationSchema: object({
      text: string()
        .min(MIN_LENGTH, MIN_MESSAGE)
        .max(MAX_LENGTH, MAX_MESSAGE)
        .required(),
    }),
  });
  const clearResults = () => {
    dispatch(setNeedToRenderSearchContent(false));
    dispatch(setSearchedArts([]));
    formik.values.text = '';
  };
  return (
    <FormWrapper>
      <Form onSubmit={formik.handleSubmit} data-testid="form">
        <SearchInput
          id="text"
          type="text"
          value={formik.values.text}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          data-testid="input_value"
        />
        <SearchButton type="submit" data-testid="submit">
          <SearchIcon src="./src/assets/search.svg" alt="search icon" />
        </SearchButton>
      </Form>
      <FlexDiv>
        <SortDiv>
          Sort by:
          <ShowDropMenuButton
            data-testid="show_drop"
            onClick={onClickSortButton}
          >
            {sortByValue}
            <DropDownIcon src="./src/assets/arrow.svg" alt="drop down" />
          </ShowDropMenuButton>
          <DropMenu data-testid="drop_menu" $visibility={isVisible}>
            <SortByList>
              {SORT_VALUES.map((el: string) => (
                <ListElem key={el} onClick={onClickLi}>
                  {el}
                </ListElem>
              ))}
            </SortByList>
          </DropMenu>
        </SortDiv>
        {needToRenderResults ? (
          <ClearButton onClick={clearResults}>Clear</ClearButton>
        ) : (
          <></>
        )}
      </FlexDiv>
      {formik.touched.text && formik.errors.text && (
        <ErrorMsg data-testid="error_input">{formik.errors.text}</ErrorMsg>
      )}
    </FormWrapper>
  );
};
