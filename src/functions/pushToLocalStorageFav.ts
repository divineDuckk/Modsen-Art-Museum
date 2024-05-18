import { Art } from '@/interfaces/GalleryIntefaces';

export const pushToLocalStorageFav = (art: Art, isFav: boolean) => {
  localStorage.setItem(
    String(art.id),
    JSON.stringify({ ...art, isFav: !isFav })
  );
};
