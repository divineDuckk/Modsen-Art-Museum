import { RootState } from '../types';

export const isNeedRenderSearchContent = (state: RootState) =>
  state.searchedGallery.needRenderSearchContent;
export const searchedArtIsLoading = (state: RootState) =>
  state.searchedGallery.searchedArtIsLoad;
export const searchedArtsResults = (state: RootState) =>
  state.searchedGallery.searchedArts;
export const isLoading = (state: RootState) => state.searchedGallery.isLoading;
export const error = (state: RootState) => state.searchedGallery.error;
