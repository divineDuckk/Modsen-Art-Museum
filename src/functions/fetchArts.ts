import { BASE_URL } from '@/constants/constants';
import axios from 'axios';

export const fetchArts = async (limit: number, activePage?: number) => {
  try {
    if (activePage) {
      const res = await axios.get(BASE_URL, {
        params: { page: activePage, limit: limit },
      });
      return res.data.data;
    }
    const res = await axios.get(BASE_URL, {
      params: { limit: limit },
    });
    return res.data.data;
  } catch (error) {
    throw new Error('failed to fetch arts');
  }
};
