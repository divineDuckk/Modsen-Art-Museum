import {
  pushToLocalStorageFav,
  removeFromLocalStorageFav,
} from '@/utils/functions';
import { useTogleFavHanderProps } from '@/utils/interfaces';

type NavigateToArtFunction = () => void;

export const useToggleFavHandler = ({
  isFav,
  setIsFav,
  setFavs,
  art,
  favs,
}: useTogleFavHanderProps): NavigateToArtFunction => {
  const toggleFavHandler = () => {
    setIsFav(!isFav);
    if (isFav) {
      removeFromLocalStorageFav(art.id);
      setFavs && favs && setFavs(favs.filter((el) => el.id !== art.id));
    } else {
      pushToLocalStorageFav(art, isFav);
      setFavs && favs && setFavs([...favs, { ...art, isFav: !isFav }]);
    }
  };

  return toggleFavHandler;
};
