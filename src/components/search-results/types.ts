import { Art } from '@/utils/interfaces/galleryIntefaces';

export interface SearchResultsProps {
  needToRenderResults: boolean;
  searchedArts: Art[];
  isLoading: boolean;
}
