import { FC } from 'react';

import { SmallCardArt } from '@/components/SmallCardArt';
import { CardSkeleton } from '@/components/SmallSkeletonLoader/styled';
import { useFetchAnotherArts } from '@/hooks/useFetchAnotherArts';
import { AnotherGalleryGroup } from './styled';
export const AnotherGallery: FC = () => {
  const { anotherArts, isLoading } = useFetchAnotherArts();

  return (
    <AnotherGalleryGroup colums={3} rows={3}>
      {anotherArts.map((art) => {
        return !isLoading ? (
          <SmallCardArt key={art.id} art={art} />
        ) : (
          <CardSkeleton key={art.id} />
        );
      })}
    </AnotherGalleryGroup>
  );
};
