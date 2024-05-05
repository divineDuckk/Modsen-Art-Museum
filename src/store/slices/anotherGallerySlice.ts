import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
interface Art {
  artist_title: string;
  title: string;
  id: number;
  image_id: string;
  is_public_domain: boolean;
}
interface ArtState {
  arts: Art[];
  searchedArts: Art[];
  searchedArtIsLoad: boolean;
  needRenderSearchContent: boolean;
}

const initialState: ArtState = {
  arts: new Array(9),
  searchedArts: [],
  searchedArtIsLoad: false,
  needRenderSearchContent: false,
};

export const anotherGallerySlice = createSlice({
  name: 'anotherGallery',
  initialState,
  reducers: {
    setArts: (state, action: PayloadAction<Art[]>) => {
      state.arts = [...action.payload];
    },
    setSearchedArts: (state, action: PayloadAction<Art[]>) => {
      state.searchedArts = [...action.payload];
    },
    setSearchedArtsIsLoad: (state, action: PayloadAction<boolean>) => {
      state.searchedArtIsLoad = action.payload;
    },
    setNeedToRenderSearchContent: (state, action: PayloadAction<boolean>) => {
      state.needRenderSearchContent = action.payload;
    },
  },
});
export default anotherGallerySlice.reducer;
export const {
  setArts,
  setSearchedArts,
  setSearchedArtsIsLoad,
  setNeedToRenderSearchContent,
} = anotherGallerySlice.actions;
