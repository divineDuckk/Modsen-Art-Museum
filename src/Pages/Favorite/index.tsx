import { FC, useState } from 'react';
import {
  BigFavIcon,
  ContentFavoritePage,
  EmptyFavs,
  EmptyFavsImage,
  EmptyFavsParagraph,
} from './styled';

import bigFavSvg from '@/assets/bigFav.svg';
import sadSvg from '@/assets/sad-icon.svg';
import { AnotherGalleryGroup } from '@/components/other-works-gallery/styled';
import { SmallCardArt } from '@/components/small-card-art';
import { Topic } from '@/components/yours-topic';
import { DEFAULT_COLUMS_COUNT } from '@/constants/constants';
import { MainTitle, SubMainText } from '@/pages/home/styled';
import { getDataFromLocalStorage } from '@/utils/functions';

export const FavoritePage: FC = () => {
  const [favs, setFavs] = useState(getDataFromLocalStorage());

  return (
    <ContentFavoritePage>
      <MainTitle>
        Here Are Your <br />
        <SubMainText>
          <BigFavIcon src={bigFavSvg} alt="big fav icon" />
          Favorites
        </SubMainText>
      </MainTitle>
      <Topic hText="Your favorites list" spanText="Saved by you" />
      {favs.length ? (
        <AnotherGalleryGroup $colums={DEFAULT_COLUMS_COUNT} $rows="auto">
          {favs.map((art) => (
            <SmallCardArt
              key={art.id}
              inFavotites
              art={art}
              setFavs={setFavs}
            />
          ))}
        </AnotherGalleryGroup>
      ) : (
        <EmptyFavs>
          <EmptyFavsParagraph>Your favorites is empty</EmptyFavsParagraph>
          <EmptyFavsImage src={sadSvg} alt="sad smile" />
        </EmptyFavs>
      )}
    </ContentFavoritePage>
  );
};
