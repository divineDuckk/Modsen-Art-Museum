import { RootState } from '..';

export const anotherGalleryArts = (state: RootState) =>
  state.anotherGallery.arts;
export const isNeedRenderSearchContent = (state: RootState) =>
  state.anotherGallery.needRenderSearchContent;
export const searchedArtIsLoading = (state: RootState) =>
  state.anotherGallery.searchedArtIsLoad;
export const searchedArtsResults = (state: RootState) =>
  state.anotherGallery.searchedArts;
