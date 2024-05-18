import magnifier from '@/assets/magnifier.png';
import { FC } from 'react';
import { MagnifierLoader } from '../MagnifierLoader/styled';
import { AnotherGalleryGroup } from '../OtherWorksGallery/styled';
import { SmallCardArt } from '../SmallCardArt';
import { NothingFoundHeader } from './styled';
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
          colums={3}
          rows={3}
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
