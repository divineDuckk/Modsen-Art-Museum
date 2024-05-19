import { useEffect, useState } from 'react';

import { BIG_LIMIT } from '@/constants/constants';
import { fetchArts } from '@/utils/functions/fetchArts';
import { Art } from '@/utils/interfaces/galleryIntefaces';

export const useFetchAnotherArts = () => {
  const [anotherArts, setArts] = useState<Art[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const fetchData = async () => {
    setIsLoading(true);
    setError('');
    try {
      const res = await fetchArts(BIG_LIMIT);
      setArts(res);
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { anotherArts, isLoading, error };
};
