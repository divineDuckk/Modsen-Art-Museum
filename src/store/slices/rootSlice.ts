import { combineReducers } from '@reduxjs/toolkit';
import anotherGallerySlice from './anotherGallerySlice';
import currArtSlice from './currentArtSlice';
import favArtsSlice from './favArtsSlice';
import gallerySlice from './gallerySlice';
import homeSlice from './homeSlice';

export const rootReducer = combineReducers({
  gallery: gallerySlice,
  anotherGallery: anotherGallerySlice,
  fav: favArtsSlice,
  curr: currArtSlice,
  home: homeSlice,
});
