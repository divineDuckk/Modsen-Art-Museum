import { CurrentArt } from '@/utils/interfaces/currentArt';

export const pushCurrArtToSessionStorage = (curr: CurrentArt) => {
  sessionStorage.setItem('currentArt', JSON.stringify(curr));
};
