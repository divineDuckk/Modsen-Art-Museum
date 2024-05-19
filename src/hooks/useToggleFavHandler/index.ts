import {
  pushToLocalStorageFav,
  removeFromLocalStorageFav,
} from '@/utils/functions';
import { useCallback } from 'react';

import { useTogleFavHanderProps } from '@/utils/interfaces';

type NavigateToArtFunction = () => void;

export const useToggleFavHandler = ({
  isFav,
  setIsFav,
  setFavs,
  art,
  favs,
}: useTogleFavHanderProps): NavigateToArtFunction => {
  return useCallback(() => {
    setIsFav((prev) => !prev);

    if (isFav) {
      removeFromLocalStorageFav(art.id);
      setFavs && setFavs((prev) => prev.filter((el) => el.id !== art.id));
      return;
    }

    pushToLocalStorageFav(art, isFav);
    setFavs && setFavs((prev) => [...prev, { ...art, isFav: !isFav }]);
  }, [art, favs, isFav, setFavs, setIsFav]);
};
