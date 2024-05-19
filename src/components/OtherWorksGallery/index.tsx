import { FC, memo } from 'react';

import { SmallCardArt } from '@/components/SmallCardArt';
import {
  DEFAULT_COLUMS_COUNT,
  DEFAULT_ROWS_COUNT,
} from '@/constants/constants';
import { useFetchAnotherArts } from '@/hooks/useFetchAnotherArts';

import { AnotherGalleryGroup, CardSkeleton } from './styled';

export const AnotherGallery: FC = memo(() => {
  const { anotherArts, isLoading } = useFetchAnotherArts();

  return (
    <AnotherGalleryGroup
      $colums={DEFAULT_COLUMS_COUNT}
      $rows={DEFAULT_ROWS_COUNT}
    >
      {anotherArts.map((art) => {
        return !isLoading ? (
          <SmallCardArt key={art.id} art={art} />
        ) : (
          <CardSkeleton key={art.id} />
        );
      })}
    </AnotherGalleryGroup>
  );
});
