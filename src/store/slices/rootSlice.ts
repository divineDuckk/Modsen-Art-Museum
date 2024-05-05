import { combineReducers } from '@reduxjs/toolkit';
import anotherGallerySlice from './anotherGallerySlice';
import gallerySlice from './gallerySlice';

export const rootReducer = combineReducers({
  gallery: gallerySlice,
  anotherGallery: anotherGallerySlice,
});
