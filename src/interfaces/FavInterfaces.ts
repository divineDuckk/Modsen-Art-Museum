export interface FavArt {
  artist: string;
  title: string;
  id: number;
  imgSrc: string;
  access: boolean;
  isFav: boolean;
  date: string;
  country: string;
  dimensions: string;
  criditeLine: string;
  repository: string;
}
export interface FavArtState {
  arts: FavArt[];
}
