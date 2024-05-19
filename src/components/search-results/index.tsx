import { FC } from 'react';

import magnifier from '@/assets/magnifier.png';
import { AnotherGalleryGroup } from '@/components/other-works-gallery/styled';
import { SmallCardArt } from '@/components/small-card-art';
import {
  DEFAULT_COLUMS_COUNT,
  DEFAULT_ROWS_COUNT,
} from '@/constants/constants';

import { MagnifierLoader, NothingFoundHeader } from './styled';
import { SearchResultsProps } from './types';

export const SearchResults: FC<SearchResultsProps> = ({
  needToRenderResults,
  isLoading,
  searchedArts,
}) => {
  return (
    <>
      {needToRenderResults ? (
        <AnotherGalleryGroup
          $colums={DEFAULT_COLUMS_COUNT}
          $rows={DEFAULT_ROWS_COUNT}
          $display_flex={isLoading || !searchedArts.length}
        >
          {!isLoading ? (
            searchedArts.length ? (
              searchedArts.map((art) => {
                return <SmallCardArt key={art.id} art={art} />;
              })
            ) : (
              <NothingFoundHeader>Nothing found</NothingFoundHeader>
            )
          ) : (
            <MagnifierLoader src={magnifier} alt="magnifier loader" />
          )}
        </AnotherGalleryGroup>
      ) : (
        <></>
      )}
    </>
  );
};
