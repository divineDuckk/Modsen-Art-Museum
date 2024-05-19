import { Art } from './galleryIntefaces';

export interface useTogleFavHanderProps {
  isFav: boolean;
  setIsFav: React.Dispatch<React.SetStateAction<boolean>>;
  setFavs?: React.Dispatch<React.SetStateAction<Art[]>>;
  art: Art;
  favs?: Art[];
}
