export interface CurrentArt {
  title: string;
  artist: string;
  date: string;
  country: string;
  dimensions: string;
  criditeLine: string;
  repository: string;
  access: boolean;
  id: number;
  imgSrc: string;
}
export interface CurrentArtState {
  currentArt: CurrentArt;
}
