import { combineReducers } from '@reduxjs/toolkit';
import anotherGallerySlice from './anotherGallerySlice';
import currArtSlice from './currentArtSlice';
import favArtsSlice from './favArtsSlice';
import gallerySlice from './gallerySlice';

export const rootReducer = combineReducers({
  gallery: gallerySlice,
  anotherGallery: anotherGallerySlice,
  fav: favArtsSlice,
  curr: currArtSlice,
});
