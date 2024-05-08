import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Art, GalleryArtState } from '../../interfaces/GalleryIntefaces';
import { fetchArts } from '../thunks/fetchArts';

const initialState: GalleryArtState = {
  arts: new Array(3),
  activePage: 1,
  isLoading: false,
  error: null,
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setArts: (state, action: PayloadAction<Art[]>) => {
      state.arts = [...action.payload];
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.activePage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchArts.fulfilled, (state, action: PayloadAction<Art[]>) => {
        state.arts = [...action.payload];
        state.isLoading = false;
      })
      .addCase(fetchArts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});
export default gallerySlice.reducer;
export const { setArts, setPage } = gallerySlice.actions;
