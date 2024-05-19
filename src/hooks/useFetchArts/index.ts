import { useEffect, useState } from 'react';

import { LIMIT } from '@/constants/constants';
import { getPageFromSessionStorage } from '@/utils/functions';
import { fetchArts } from '@/utils/functions/fetchArts';
import { Art } from '@/utils/interfaces/galleryIntefaces';

export const useFetchArts = () => {
  const [arts, setArts] = useState<Art[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [activePage, setActivePage] = useState(getPageFromSessionStorage());
  const fetchData = async () => {
    setIsLoading(true);
    setError('');
    try {
      const res = await fetchArts(LIMIT, activePage);
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
  }, [activePage]);
  return { arts, isLoading, error, activePage, setActivePage };
};
