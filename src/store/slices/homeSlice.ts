import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: { onHomePage: boolean } = {
  onHomePage: true,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setOnHomePage: (state, action: PayloadAction<boolean>) => {
      state.onHomePage = action.payload;
    },
  },
});
export default homeSlice.reducer;
export const { setOnHomePage } = homeSlice.actions;
