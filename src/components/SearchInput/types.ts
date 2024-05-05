import { Art } from '../Gallery/types';

export interface SearchResponse {
  id: number;
}
export interface PromiseAllResponse {
  data: {
    data: Art;
  };
}
