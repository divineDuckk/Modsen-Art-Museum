import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { BASE_URL, limit } from '../../constants/constants';
import { CardArt } from '../CardArt/cardArt';
import { StyledGroup } from './styled';
import { Art } from './types';

export const Gallery: FC = () => {
  const [arts, setArts] = useState<Art[]>([]);
  const [page, setPage] = useState<number>(1);
  const getImageSrc = (imageId: string): string => {
    return `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
  };
  useEffect(() => {
    const fetchArts = async () => {
      try {
        const res = await axios.get(BASE_URL, {
          params: { page: page, limit: limit },
        });
        setArts(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArts();
    console.log(arts);
  }, [page]);
  return (
    <>
      <StyledGroup>
        {arts &&
          arts.map((item) => (
            <CardArt
              id={item.id}
              access={item.is_public_domain}
              artist={item.artist_title}
              title={item.title}
              imgSrc={getImageSrc(item.image_id)}
              key={item.id}
            />
          ))}
      </StyledGroup>
      <button>click</button>
    </>
  );
};
