export interface Art {
  artist_title: string;
  title: string;
  id: number;
  image_id: string;
  is_public_domain: boolean;
  artist_display: string;
  dimensions: string;
  credit_line: string;
  publication_history: string;
}
export interface AnotherGalleryArtState {
  arts: Art[];
  isLoading: boolean;
  error: unknown;
}
export interface SearchedGalleryArtState {
  searchedArts: Art[];
  searchedArtIsLoad: boolean;
  needRenderSearchContent: boolean;
  isLoading: boolean;
  error: unknown;
}
export interface GalleryArtState {
  arts: Art[];
  activePage: number;
  isLoading: boolean;
  error: unknown;
}
