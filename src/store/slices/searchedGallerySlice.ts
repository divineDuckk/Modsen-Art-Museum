import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import {
  Art,
  SearchedGalleryArtState,
} from '../../interfaces/GalleryIntefaces';
import { fetchResultsOfSearch } from '../thunks/fetchResultOfSearch';

const initialState: SearchedGalleryArtState = {
  searchedArts: [],
  needRenderSearchContent: false,
  isLoading: false,
  error: null,
};

export const anotherGallerySlice = createSlice({
  name: 'searchedGallery',
  initialState,
  reducers: {
    setSearchedArts: (state, action: PayloadAction<Art[]>) => {
      state.searchedArts = [...action.payload];
    },
    setNeedToRenderSearchContent: (state, action: PayloadAction<boolean>) => {
      state.needRenderSearchContent = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchResultsOfSearch.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchResultsOfSearch.fulfilled,
        (state, action: { payload: Art[] | undefined }) => {
          state.searchedArts = [...(action.payload ?? [])];
          state.isLoading = false;
        }
      )
      .addCase(fetchResultsOfSearch.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});
export default anotherGallerySlice.reducer;
export const { setSearchedArts, setNeedToRenderSearchContent } =
  anotherGallerySlice.actions;
