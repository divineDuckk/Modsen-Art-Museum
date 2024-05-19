import { Art } from '@/utils/interfaces/galleryIntefaces';

type SortByObj = {
  [key: string]: (arr: Art[]) => Art[];
};
export const sortByObj: SortByObj = {
  'Title alphabetically': (arr: Art[]): Art[] => {
    const sortedArr = [...arr].sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });
    return sortedArr;
  },
  None: (arr: Art[]): Art[] => arr,
  'Artist alphabetically': (arr: Art[]): Art[] => {
    const sortedArr = [...arr].sort((a, b) => {
      if (a.artist_title > b.artist_title) {
        return 1;
      }
      if (a.artist_title < b.artist_title) {
        return -1;
      }
      return 0;
    });
    return sortedArr;
  },
};
