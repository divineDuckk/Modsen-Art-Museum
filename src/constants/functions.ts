import { FavArt } from '../interfaces/FavInterfaces';

export const getImageSrc = (imageId: string | null): string => {
  if (imageId === null)
    return 'https://www.google.com/search?q=image+not+found&tbm=isch&ved=2ahUKEwiZhIqw6_aFAxVWv_0HHVtXDHMQ2-cCegQIABAA&oq=image+not+&gs_lp=EgNpbWciCmltYWdlIG5vdCAqAggBMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIEEAAYHjIEEAAYHjIEEAAYHjIEEAAYHjIEEAAYHjIEEAAYHkisNFDlBlitK3AFeACQAQCYAV-gAZEKqgECMTa4AQHIAQD4AQGKAgtnd3Mtd2l6LWltZ6gCCsICCxAAGIAEGLEDGIMBwgIIEAAYgAQYsQPCAgkQABiABBgBGArCAgsQABiABBgBGBgYCsICBxAAGIAEGBjCAgoQABiABBhDGIoFwgIHEAAYgAQYCsICBxAjGCcY6gKIBgE&sclient=img&ei=Zac3Ztm9Ftb-9u8P266xmAc&bih=919&biw=1920&prmd=ivnsmbt#imgrc=J-SEUou7K5gClM';
  return `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
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
export const findObjectById = (
  id: number,
  arr: FavArt[]
): FavArt | undefined => {
  return arr.find((el) => el.id === id);
};
