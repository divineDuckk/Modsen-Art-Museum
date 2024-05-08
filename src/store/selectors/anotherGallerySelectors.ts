import { RootState } from '../types';

export const anotherGalleryArts = (state: RootState) =>
  state.anotherGallery.arts;
export const isLoading = (state: RootState) => state.anotherGallery.isLoading;
export const error = (state: RootState) => state.anotherGallery.error;
