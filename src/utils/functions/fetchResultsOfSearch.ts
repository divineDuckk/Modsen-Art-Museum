import {
  PromiseAllResponse,
  SearchResponse,
} from '@/components/search-form/types';
import axios, { AxiosResponse } from 'axios';

import { BASE_URL, BIG_LIMIT } from '@/constants/constants';
import { sortByObj } from '@/utils/functions';

export const fetchResultsOfSearch = async ({
  text,
  sortByValue,
}: {
  text: string;
  sortByValue: string;
}) => {
  try {
    const searchRes = await axios.get(BASE_URL + '/search?q=' + text, {
      params: {
        limit: BIG_LIMIT,
      },
    });

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
    throw new Error('failed to find arts');
  }
};
