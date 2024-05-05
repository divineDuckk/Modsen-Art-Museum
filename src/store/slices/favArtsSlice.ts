import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { FavArt, FavArtState } from '../../interfaces/FavInterfaces';

const initialState: FavArtState = {
  arts: [],
};

export const favArtsSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    setFavArts: (state, action: PayloadAction<FavArt[]>) => {
      state.arts = [...action.payload];
    },
    addToFav: (state, action: PayloadAction<FavArt>) => {
      state.arts.push(action.payload);
    },
  },
});
export default favArtsSlice.reducer;
export const { setFavArts, addToFav } = favArtsSlice.actions;
