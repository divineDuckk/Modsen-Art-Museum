import { Pages } from '@/components/SwitcherPage/constants';
import { LIMIT } from '@/constants/constants';
import { fetchArts } from '@/functions/fetchArts';
import { Art } from '@/interfaces/GalleryIntefaces';
import { useEffect, useState } from 'react';

export const useFetchArts = () => {
  const [arts, setArts] = useState<Art[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [activePage, setActivePage] = useState(Pages.FirstPage);
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
