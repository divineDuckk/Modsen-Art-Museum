import { Art } from '@/interfaces/GalleryIntefaces';

export const getDataFromLocalStorage = (): Art[] => {
  const keys = Object.keys(localStorage);
  const dataArray: Art[] = [];
  keys.forEach((key) => {
    const data = localStorage.getItem(key);
    if (data) {
      dataArray.push(JSON.parse(data));
    }
  });
  return dataArray;
};
