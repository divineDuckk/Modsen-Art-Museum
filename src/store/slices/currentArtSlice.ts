import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { CurrentArt, CurrentArtState } from '../../interfaces/CurrentArt';

const initialState: CurrentArtState = {
  currentArt: null,
};
export const currArtSlice = createSlice({
  name: 'curr',
  initialState,
  reducers: {
    setCurrentArt: (state, action: PayloadAction<CurrentArt>) => {
      state.currentArt = { ...action.payload };
    },
  },
});
export default currArtSlice.reducer;
export const { setCurrentArt } = currArtSlice.actions;
