import { FC } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import {
  getArtistCountry,
  getArtistDate,
  getImageSrc,
} from '../../constants/functions';
import { RootState } from '../../store';
import { AnotherStyledGallery } from '../OtherWorksGallery/styled';
import { SmallCardArt } from '../SmallCardArt/SmallCardArt';
export const SearchResults: FC = () => {
  const foundedArts = useSelector(
    (state: RootState) => state.anotherGallery.searchedArts
  );
  const isLoad = useSelector(
    (state: RootState) => state.anotherGallery.searchedArtIsLoad
  );
  const needToRender = useSelector(
    (state: RootState) => state.anotherGallery.needRenderSearchContent
  );

  return (
    <>
      {needToRender ? (
        <AnotherStyledGallery
          colums={3}
          rows={3}
          displayFlex={isLoad || !foundedArts.length}
        >
          {!isLoad ? (
            foundedArts.length ? (
              foundedArts.map((item) => (
                <SmallCardArt
                  access={item.is_public_domain}
                  artist={item.artist_title}
                  id={item.id}
                  title={item.title}
                  imgSrc={getImageSrc(item.image_id)}
                  key={item.id}
                  country={getArtistCountry(item.artist_display)}
                  date={getArtistDate(item.artist_display)}
                  criditeLine={item.credit_line}
                  dimensions={item.dimensions}
                  repository={
                    item.publication_history
                      ? item.publication_history.split(',')[0]
                      : 'No repository'
                  }
                />
              ))
            ) : (
              <h2>Nothing found</h2>
            )
          ) : (
            <MagnifyingGlass />
          )}
        </AnotherStyledGallery>
      ) : (
        <></>
      )}
    </>
  );
};
