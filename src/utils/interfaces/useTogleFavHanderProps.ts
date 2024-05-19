import { Art } from './galleryIntefaces';

export interface useTogleFavHanderProps {
  isFav: boolean;
  setIsFav: (isFav: boolean) => void;
  setFavs?: (arr: Art[]) => void;
  art: Art;
  favs?: Art[];
}
