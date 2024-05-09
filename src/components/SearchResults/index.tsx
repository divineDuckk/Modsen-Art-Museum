import { getArtistCountry, getArtistDate, getImageSrc } from '@/functions';
import { FC } from 'react';

import { useAppSelector } from '@/store/hooks';
import {
  isLoading,
  isNeedRenderSearchContent,
  searchedArtsResults,
} from '@/store/selectors/searchGallerySelectors';
import { MagnifierLoader } from '../MagnifierLoader/styled';
import { AnotherGalleryGroup } from '../OtherWorksGallery/styled';
import { SmallCardArt } from '../SmallCardArt';
import { NothingFoundHeader } from './styled';
export const SearchResults: FC = () => {
  const foundedArts = useAppSelector(searchedArtsResults);
  const isLoad = useAppSelector(isLoading);
  const needToRender = useAppSelector(isNeedRenderSearchContent);

  return (
    <>
      {needToRender ? (
        <AnotherGalleryGroup
          colums={3}
          rows={3}
          displayFlex={isLoad || !foundedArts.length}
        >
          {!isLoad ? (
            foundedArts.length ? (
              foundedArts.map(
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
                  return (
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
                  );
                }
              )
            ) : (
              <NothingFoundHeader>Nothing found</NothingFoundHeader>
            )
          ) : (
            <MagnifierLoader
              src="/src/assets/magnifier.png"
              alt="magnifier loader"
            />
          )}
        </AnotherGalleryGroup>
      ) : (
        <></>
      )}
    </>
  );
};
