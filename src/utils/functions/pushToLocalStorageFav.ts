import { Art } from '@/utils/interfaces/galleryIntefaces';

export const pushToLocalStorageFav = (art: Art, isFav: boolean) => {
  localStorage.setItem(
    String(art.id),
    JSON.stringify({ ...art, isFav: !isFav })
  );
};
