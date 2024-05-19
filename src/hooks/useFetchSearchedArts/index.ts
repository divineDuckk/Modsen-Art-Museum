import { useCallback, useState } from 'react';

import { fetchResultsOfSearch } from '@/utils/functions/fetchResultsOfSearch';
import { Art } from '@/utils/interfaces/galleryIntefaces';

export const useFetchSearchedArts = () => {
  const [searchedArts, setSearchedArts] = useState<Art[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchSearching = useCallback(
    async ({ text, sortByValue }: { text: string; sortByValue: string }) => {
      setIsLoading(true);
      setError('');
      try {
        const res = await fetchResultsOfSearch({
          text: text,
          sortByValue: sortByValue,
        });
        setSearchedArts(res);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    },
    []
  );

  return {
    searchedArts,
    isLoading,
    error,
    fetchSearching,
    setSearchedArts,
  };
};
