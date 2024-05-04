import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
interface Art {
  artist_title: string;
  title: string;
  id: number;
  image_id: string;
  is_public_domain: true;
}
interface ArtState {
  arts: Art[];
  activePage: number;
}

const initialState: ArtState = {
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
