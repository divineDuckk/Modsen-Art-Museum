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
    setIsFav(!isFav);

    if (isFav) {
      removeFromLocalStorageFav(art.id);
      setFavs && favs && setFavs(favs.filter((el) => el.id !== art.id));
      return;
    }

    pushToLocalStorageFav(art, isFav);
    setFavs && favs && setFavs([...favs, { ...art, isFav: !isFav }]);
  }, [art, favs, isFav, setFavs, setIsFav]);
};
