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
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [sortByValue, setSortByValue] = useState<string>(SORT_VALUES[0]);
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
      text: string().max(20, 'Must be 20 characters or less').required(),
    }),
  });
  const clearResults = () => {
    dispatch(setNeedToRenderSearchContent(false));
    dispatch(setSearchedArts([]));
    formik.values.text = '';
  };
  return (
    <FormWrapper>
      <Form onSubmit={formik.handleSubmit}>
        <SearchInput
          id="text"
          type="text"
          value={formik.values.text}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <SearchButton type="submit">
          <SearchIcon src="./src/assets/search.svg" alt="search icon" />
        </SearchButton>
      </Form>
      <FlexDiv>
        <SortDiv>
          Sort by:
          <ShowDropMenuButton onClick={onClickSortButton}>
            {sortByValue}
            <DropDownIcon src="./src/assets/arrow.svg" alt="drop down" />
          </ShowDropMenuButton>
          <DropMenu visibility={isVisible}>
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
        <ErrorMsg>{formik.errors.text}</ErrorMsg>
      )}
    </FormWrapper>
  );
};
