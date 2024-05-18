import { Art } from '@/interfaces/GalleryIntefaces';

export const alreadyInFavs = (id: number | undefined, favs: Art[]): boolean => {
  return favs.some((item) => item.id === id);
};
