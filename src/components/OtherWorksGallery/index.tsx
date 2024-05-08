import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { FC, useEffect } from 'react';

import {
  getArtistCountry,
  getArtistDate,
  getImageSrc,
} from '@/constants/functions';
import {
  anotherGalleryArts,
  isLoading,
} from '@/store/selectors/anotherGallerySelectors';
import { fetchAnotherArts } from '@/store/thunks/fetchAnotherArts';
import { SmallCardArt } from '../SmallCardArt';
import { CardSkeleton } from '../SmallSkeletonLoader/styled';
import { AnotherGalleryGroup } from './styled';
export const AnotherGallery: FC = () => {
  const anotherArts = useAppSelector(anotherGalleryArts);
  const isLoad = useAppSelector(isLoading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAnotherArts());
  }, []);
  return (
    <AnotherGalleryGroup colums={3} rows={3}>
      {anotherArts.map(
        ({
          id,
          is_public_domain,
          artist_title,
          title,
          image_id,
          artist_display,
          credit_line,
          dimensions,
          publication_history,
        }) => {
          const artistCountry = getArtistCountry(artist_display);
          const imageSrc = getImageSrc(image_id);
          const date = getArtistDate(artist_display);
          const repository = publication_history
            ? publication_history.split(',')[0]
            : 'No repository';
          return !isLoad ? (
            <SmallCardArt
              id={id}
              access={is_public_domain}
              artist={artist_title}
              title={title}
              imgSrc={imageSrc}
              key={id}
              country={artistCountry}
              date={date}
              criditeLine={credit_line}
              dimensions={dimensions}
              repository={repository}
            />
          ) : (
            <CardSkeleton key={id} />
          );
        }
      )}
    </AnotherGalleryGroup>
  );
};
