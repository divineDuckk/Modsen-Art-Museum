import { BASE_URL, LIMIT } from '@/constants/constants';
import { Art } from '@/interfaces/GalleryIntefaces';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchArts = createAsyncThunk<Art[], number>(
  'gallery/fetchArts',
  async (activePage, { rejectWithValue }) => {
    try {
      const res = await axios.get(BASE_URL, {
        params: { page: activePage, limit: LIMIT },
      });
      if (!(res.status === 200)) throw new Error('failed to fetch arts');
      return res.data.data;
    } catch (error) {
      rejectWithValue((error as Error).message);
    }
  }
);
