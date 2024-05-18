import { CurrentArt } from '@/interfaces/CurrentArt';

export const getCurrArtFromSessionStorage = (): CurrentArt | null => {
  const art = sessionStorage.getItem('currentArt');
  if (art) return JSON.parse(art);
  return null;
};
