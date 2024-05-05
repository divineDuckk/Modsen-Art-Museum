import { FC } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { getImageSrc } from '../../constants/functions';
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
        <AnotherStyledGallery displayFlex={isLoad || !foundedArts.length}>
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
