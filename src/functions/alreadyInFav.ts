import { FavArt } from '@/interfaces/FavInterfaces';

export const alreadyInFavs = (
  id: number | undefined,
  favs: FavArt[]
): boolean => {
  return favs.some((item) => item.id === id);
};
