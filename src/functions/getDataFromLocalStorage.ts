import { FavArt } from '@/interfaces/FavInterfaces';

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
