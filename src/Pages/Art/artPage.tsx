import favSvg from '@/assets/fav.svg';
import { AddToFavButton, FavIcon } from '@/components/CardArt/styled';
import {
  alreadyInFavs,
  getCurrArtFromSessionStorage,
  getDataFromLocalStorage,
  pushToLocalStorageFav,
  removeFromLocalStorageFav,
} from '@/functions';
import { FC, useState } from 'react';

import {
  AddToFavButtonAbsolutePos,
  ArtistDate,
  ArtistName,
  CurrentArtImage,
  CurrentArtPage,
  Description,
  ImageWithButton,
  Info,
  TitleInfo,
  TitleWrapper,
  WrapperArtInfo,
  WrapperArtistInfo,
} from './styled';
export const ArtPage: FC = () => {
  const favs = getDataFromLocalStorage();
  const currentArt = getCurrArtFromSessionStorage();
  const [isFav, setIsFav] = useState(
    currentArt ? alreadyInFavs(currentArt.id, favs) : false
  );

  const toggleFavHandler = () => {
    setIsFav((prev) => !prev);

    if (currentArt && isFav) {
      removeFromLocalStorageFav(currentArt.id);
    } else if (currentArt) {
      pushToLocalStorageFav(
        {
          artist_display: currentArt.artist_display,
          artist_title: currentArt.artist,
          credit_line: currentArt.criditeLine,
          dimensions: currentArt.dimensions,
          id: currentArt.id,
          image_id: currentArt.image_id,
          is_public_domain: currentArt.access,
          publication_history: currentArt.repository,
          title: currentArt.title,
        },
        isFav
      );
    }
  };
  return (
    <CurrentArtPage>
      <ImageWithButton>
        <CurrentArtImage src={currentArt?.imgSrc} alt="image of art" />
        <AddToFavButtonAbsolutePos
          $is_active={alreadyInFavs(currentArt?.id, favs)}
        >
          <AddToFavButton
            onClick={toggleFavHandler}
            $is_active={isFav ?? false}
          >
            <FavIcon src={favSvg} alt="toggle fav" />
          </AddToFavButton>
        </AddToFavButtonAbsolutePos>
      </ImageWithButton>
      <Info>
        <WrapperArtInfo>
          <TitleWrapper>
            <TitleInfo>{currentArt?.title}</TitleInfo>
          </TitleWrapper>
          <ArtistName>
            {currentArt?.artist ? currentArt.artist : 'Unknown'}
          </ArtistName>
          <ArtistDate>{currentArt?.date}</ArtistDate>
        </WrapperArtInfo>
        <WrapperArtistInfo>
          <TitleWrapper>
            <TitleInfo>Overview</TitleInfo>
          </TitleWrapper>
          <Description>
            <span>Artist nacionality: </span>
            {currentArt?.country}
          </Description>
          <Description>
            <span>Dimensions: Sheet: </span>
            {currentArt?.dimensions}
          </Description>
          <Description>
            <span>Credit Line: </span>
            {currentArt?.criditeLine}
          </Description>
          <Description>
            <span>Repository: </span>
            {currentArt?.repository}
          </Description>
          <Description>{currentArt?.access ? 'Public' : 'Private'}</Description>
        </WrapperArtistInfo>
      </Info>
    </CurrentArtPage>
  );
};
