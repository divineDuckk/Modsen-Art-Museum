export interface Art {
  artist_title: string;
  title: string;
  id: number;
  image_id: string;
  is_public_domain: boolean;
}
export interface AnotherGalleryArtState {
  arts: Art[];
  searchedArts: Art[];
  searchedArtIsLoad: boolean;
  needRenderSearchContent: boolean;
}
export interface GalleryArtState {
  arts: Art[];
  activePage: number;
}
