import {
  PromiseAllResponse,
  SearchResponse,
} from '@/components/SearchForm/types';
import { BASE_URL, BIG_LIMIT } from '@/constants/constants';
import { sortByObj } from '@/constants/functions';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

export const fetchResultsOfSearch = createAsyncThunk(
  'gallery/fetchAnotherArts',
  async ({ text, sortByValue }: { text: string; sortByValue: string }) => {
    try {
      const searchRes = await axios.get(BASE_URL + '/search?q=' + text, {
        params: {
          limit: BIG_LIMIT,
        },
      });
      if (!(searchRes.status === 200)) throw new Error('failed to fetch arts');
      const requests = searchRes.data.data.map((el: SearchResponse) =>
        axios.get(BASE_URL + '/' + el.id)
      );
      const result: AxiosResponse[] = await axios.all(requests);
      const foundedArts = result.map(
        (response: PromiseAllResponse) => response.data.data
      );
      const sortedArr = sortByObj[sortByValue](foundedArts);

      return sortedArr;
    } catch (error) {
      console.log(error);
    }
  }
);
