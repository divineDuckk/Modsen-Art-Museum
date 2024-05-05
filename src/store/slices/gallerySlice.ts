import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Art, GalleryArtState } from '../../interfaces/GalleryIntefaces';

const initialState: GalleryArtState = {
  arts: new Array(3),
  activePage: 1,
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
});
export default gallerySlice.reducer;
export const { setArts, setPage } = gallerySlice.actions;
