import { CurrentArt } from '@/utils/interfaces/currentArt';

export const getCurrArtFromSessionStorage = (): CurrentArt => {
  const art = sessionStorage.getItem('currentArt');
  if (!art) throw new Error('there is no curr art');
  return JSON.parse(art);
};
