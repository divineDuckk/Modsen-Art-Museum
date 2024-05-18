import { Art } from '@/interfaces/GalleryIntefaces';

export interface SearchResultsProps {
  needToRenderResults: boolean;
  searchedArts: Art[];
  isLoading: boolean;
}
