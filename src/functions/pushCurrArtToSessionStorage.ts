import { CurrentArt } from '@/interfaces/CurrentArt';

export const pushCurrArtToSessionStorage = (curr: CurrentArt) => {
  sessionStorage.setItem('currentArt', JSON.stringify(curr));
};
