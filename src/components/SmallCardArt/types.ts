import { Art } from '@/interfaces/GalleryIntefaces';

export interface SmallCardArt {
  id: number;
  imgSrc: string;
  title: string;
  artist: string;
  access: boolean;
  inFavotites?: boolean;
  date: string;
  country: string;
  dimensions: string;
  criditeLine: string;
  repository: string;
}
export interface SmallCardArtProps {
  art: Art;
  setFavs?: (favs: Art[]) => void;
  inFavotites?: boolean;
}
