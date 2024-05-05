export interface FavArt {
  artist: string;
  title: string;
  id: number;
  imgSrc: string;
  access: boolean;
  isFav: boolean;
}
export interface FavArtState {
  arts: FavArt[];
}
