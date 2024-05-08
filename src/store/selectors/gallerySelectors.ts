import { RootState } from '../types';

export const galleryArts = (state: RootState) => state.gallery.arts;
export const numOfActivePage = (state: RootState) => state.gallery.activePage;
export const isLoading = (state: RootState) => state.gallery.isLoading;
export const error = (state: RootState) => state.gallery.error;
