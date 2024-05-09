import { Art } from '../../interfaces/GalleryIntefaces';

export interface SearchResponse {
  id: number;
}
export interface PromiseAllResponse {
  data: {
    data: Art;
  };
}
export interface PromiseAllResponseArray {
  data: {
    data: Art[];
  };
}
export interface DropMenuAttr {
  $visibility: boolean;
}
