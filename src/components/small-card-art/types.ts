import { Art } from '@/components/utils/interfaces/galleryIntefaces';

export interface SmallCardArtProps {
  art: Art;
  setFavs?: (favs: Art[]) => void;
  inFavotites?: boolean;
}
