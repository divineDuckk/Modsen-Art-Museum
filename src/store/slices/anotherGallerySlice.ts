import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { AnotherGalleryArtState, Art } from '../../interfaces/GalleryIntefaces';
import { fetchAnotherArts } from '../thunks/fetchAnotherArts';

const initialState: AnotherGalleryArtState = {
  arts: new Array(9),
  isLoading: false,
  error: null,
};

export const anotherGallerySlice = createSlice({
  name: 'anotherGallery',
  initialState,
  reducers: {
    setArts: (state, action: PayloadAction<Art[]>) => {
      state.arts = [...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnotherArts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchAnotherArts.fulfilled,
        (state, action: PayloadAction<Art[]>) => {
          state.arts = [...action.payload];
          state.isLoading = false;
        }
      )
      .addCase(fetchAnotherArts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});
export default anotherGallerySlice.reducer;
export const { setArts } = anotherGallerySlice.actions;
