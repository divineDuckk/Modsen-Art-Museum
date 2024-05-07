import { FavArt } from '../interfaces/FavInterfaces';
import { Art } from '../interfaces/GalleryIntefaces';

export const getImageSrc = (imageId: string | null): string => {
  if (imageId === null)
    return 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';
  return `https://www.artic.edu/iiif/2/${imageId}/full/451,/0/default.jpg`;
};
export const getDataFromLocalStorage = (): FavArt[] => {
  const keys = Object.keys(localStorage);
  const dataArray: FavArt[] = [];
  keys.forEach((key) => {
    const data = localStorage.getItem(key);
    if (data) {
      dataArray.push(JSON.parse(data));
    }
  });
  return dataArray;
};
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
export const findObjectById = (
  id: number,
  arr: FavArt[]
): FavArt | undefined => {
  return arr.find((el) => el.id === id);
};
export const alreadyInFavs = (
  id: number | undefined,
  favs: FavArt[]
): boolean => {
  return favs.some((item) => item.id === id);
};
export const getArtistCountry = (artist_display: string): string => {
  if (artist_display.includes('('))
    return artist_display.split('(')[1].split(',')[0].trim();
  else if (artist_display.includes('\n'))
    return artist_display.split('\n')[1].split(',')[0].trim();
  else if (artist_display.includes(',')) {
    const arr = artist_display.split(',')[0];
    if (arr.includes(' ')) return arr[arr.length - 1];
    return artist_display.split(',')[0];
  }
  return artist_display;
};

export const getArtistDate = (artist_display: string): string => {
  const matchResult = artist_display.match(/(\d{4}(?:–\d{2})?)/);
  if (!matchResult || !matchResult.length) return 'No date info';
  return matchResult[1];
};
