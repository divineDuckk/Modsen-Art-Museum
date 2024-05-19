import { Art } from '@/utils/interfaces/galleryIntefaces';

export interface SmallCardArtProps {
  art: Art;
  setFavs?: React.Dispatch<React.SetStateAction<Art[]>>;
  inFavotites?: boolean;
}
