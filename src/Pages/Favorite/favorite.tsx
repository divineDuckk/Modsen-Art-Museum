import { AnotherGalleryGroup } from '@/components/OtherWorksGallery/styled';
import { FC, useState } from 'react';

import bigFavSvg from '@/assets/bigFav.svg';
import sadSvg from '@/assets/sad-icon.svg';
import { SmallCardArt } from '@/components/SmallCardArt';
import { BigFavIcon, MainTitle, SubMainText } from '@/components/Title/styled';
import { Topic } from '@/components/YoursTopic';
import { getDataFromLocalStorage } from '@/functions';

import {
  ContentFavoritePage,
  EmptyFavs,
  EmptyFavsImage,
  EmptyFavsParagraph,
} from './styled';

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
        <AnotherGalleryGroup colums={3} rows="auto">
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
          <EmptyFavsImage width={200} src={sadSvg} alt="sad smile" />
        </EmptyFavs>
      )}
    </ContentFavoritePage>
  );
};
