import { getDataFromLocalStorage } from './getDataFromLocalStorage';

export const alreadyInFavs = (id: number | undefined): boolean => {
  const favs = getDataFromLocalStorage();
  return favs.some((item) => item.id === id);
};
