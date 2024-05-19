import { ArtPage } from '@/pages/art';
import { FavoritePage } from '@/pages/favorite';
import { MainPage } from '@/pages/home';

export const BASE_URL = 'https://api.artic.edu/api/v1/artworks';
export const LIMIT = 3;
export const BIG_LIMIT = 9;
export const SORT_VALUES = [
  'None',
  'Title alphabetically',
  'Artist alphabetically',
];
export const DEFAULT_COLUMS_COUNT = 3;
export const DEFAULT_ROWS_COUNT = 3;
export const PADD_PERSENT = 16.66;

export const RoutesArr = [
  {
    path: '/',
    page: MainPage,
  },
  {
    path: '/favorites',
    page: FavoritePage,
  },
  {
    path: '/arts/:id',
    page: ArtPage,
  },
];
