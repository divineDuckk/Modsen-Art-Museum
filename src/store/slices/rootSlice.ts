import { combineReducers } from '@reduxjs/toolkit';
import gallerySlice from './gallerySlice';

export const rootReducer = combineReducers({
  gallery: gallerySlice,
});
