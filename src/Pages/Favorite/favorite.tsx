import { AnotherGalleryGroup } from '@/components/OtherWorksGallery/styled';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import bigFavSvg from '@/assets/bigFav.svg';
import sadSvg from '@/assets/sad-icon.svg';
import { SmallCardArt } from '@/components/SmallCardArt';
import { BigFavIcon, MainTitle, SubMainText } from '@/components/Title/styled';
import { Topic } from '@/components/YoursTopic';
import { favArts } from '@/store/selectors/favArtsSelectors';
import {
  ContentFavoritePage,
  EmptyFavs,
  EmptyFavsImage,
  EmptyFavsParagraph,
} from './styled';
export const FavoritePage: FC = () => {
  const favs = useSelector(favArts);
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
          {favs.map((item) => (
            <SmallCardArt key={item.id} inFavotites {...item} />
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
