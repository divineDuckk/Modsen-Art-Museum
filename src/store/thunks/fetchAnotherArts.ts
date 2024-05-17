import { BASE_URL, BIG_LIMIT } from '@/constants/constants';
import { Art } from '@/interfaces/GalleryIntefaces';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAnotherArts = createAsyncThunk<Art[]>(
    'gallery/fetchAnotherArts',
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get(BASE_URL, {
                params: { limit: BIG_LIMIT },
            });
            if (!(res.status === 200)) throw new Error('failed to fetch arts');

            return res.data.data;
        } catch (error) {
            rejectWithValue((error as Error).message);
        }
    }
);
