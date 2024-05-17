import { BASE_URL } from '@/constants/constants';
import axios from 'axios';

export const fetchArts = async (activePage: number, limit: number) => {
  try {
    const res = await axios.get(BASE_URL, {
      params: { page: activePage, limit: limit },
    });
    return res.data.data;
  } catch (error) {
    throw new Error('failed to fetch arts');
  }
};
