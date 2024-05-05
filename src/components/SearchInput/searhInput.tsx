import axios from 'axios';
import { useFormik } from 'formik';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { object, string } from 'yup';
import { BASE_URL, BIG_LIMIT } from '../../constants/constants';
import { RootState } from '../../store';
import {
  setNeedToRenderSearchContent,
  setSearchedArts,
  setSearchedArtsIsLoad,
} from '../../store/slices/anotherGallerySlice';
import {
  ClearButton,
  ErrorMsg,
  Form,
  FormWrapper,
  SearchButton,
  StyledInput,
} from './styled';
import { PromiseAllResponse, SearchResponse } from './types';
export const SearhInput: FC = () => {
  const dispatch = useDispatch();
  const needToRenderResults = useSelector(
    (state: RootState) => state.anotherGallery.needRenderSearchContent
  );
  const searchHandler = async (values: { text: string }) => {
    try {
      dispatch(setNeedToRenderSearchContent(true));
      dispatch(setSearchedArtsIsLoad(true));
      const searchRes = await axios.get(BASE_URL + '/search?q=' + values.text, {
        params: {
          limit: BIG_LIMIT,
        },
      });
      const result = await Promise.all(
        searchRes.data.data.map((el: SearchResponse) =>
          axios.get(BASE_URL + '/' + el.id)
        )
      );

      const foundedArts = result.map(
        (res: PromiseAllResponse) => res.data.data
      );
      dispatch(setSearchedArts(foundedArts));
      dispatch(setSearchedArtsIsLoad(false));
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
        <StyledInput
          id="text"
          type="text"
          value={formik.values.text}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <SearchButton type="submit">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 25C20.299 25 25 20.299 25 14.5C25 8.70101 20.299 4 14.5 4C8.70101 4 4 8.70101 4 14.5C4 20.299 8.70101 25 14.5 25Z"
              stroke="#393939"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28 28L22 22"
              stroke="#393939"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SearchButton>
      </Form>
      {formik.touched.text && formik.errors.text && (
        <ErrorMsg>{formik.errors.text}</ErrorMsg>
      )}
      {needToRenderResults ? (
        <ClearButton onClick={clearResults}>Clear</ClearButton>
      ) : (
        <></>
      )}
    </FormWrapper>
  );
};
