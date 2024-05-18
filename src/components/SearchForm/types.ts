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

export interface SearchFormProps {
  needToRenderResults: boolean;
  isLoading: boolean;
  setNeedToRenderResults: (isNeed: boolean) => void;
  fetchSearching: ({
    text,
    sortByValue,
  }: {
    text: string;
    sortByValue: string;
  }) => void;
  setSearchedArts: (arr: Art[]) => void;
}
