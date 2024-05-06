import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { FavArt, FavArtState } from '../../interfaces/FavInterfaces';

const initialState: FavArtState = {
  arts: [],
  inFav: false,
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
    deleteFromFav: (state, action: PayloadAction<number>) => {
      state.arts = [...state.arts.filter((el) => el.id !== action.payload)];
    },
    setInFav: (state, action: PayloadAction<boolean>) => {
      state.inFav = action.payload;
    },
  },
});
export default favArtsSlice.reducer;
export const { setFavArts, addToFav, deleteFromFav, setInFav } =
  favArtsSlice.actions;
