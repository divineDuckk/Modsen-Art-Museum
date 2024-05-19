import {
  alreadyInFavs,
  convertFromCurrArtToArt,
  getCurrArtFromSessionStorage,
} from '@/utils/functions';
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

import favSvg from '@/assets/fav.svg';
import { AddToFavButton, FavIcon } from '@/components/card-art/styled';
import { useToggleFavHandler } from '@/hooks/useToggleFavHandler';

export const ArtPage: FC = () => {
  const currentArt = getCurrArtFromSessionStorage();
  const [isFav, setIsFav] = useState(alreadyInFavs(currentArt.id));
  const art = convertFromCurrArtToArt(currentArt);
  const toggleFavHandler = useToggleFavHandler({ isFav, setIsFav, art });
  const descriptionArr = [
    {
      description: 'Artist nacionality: ',
      value: currentArt.country,
    },
    {
      description: 'Dimensions: Sheet: ',
      value: currentArt.dimensions,
    },
    {
      description: 'Credit Line: ',
      value: currentArt.criditeLine,
    },
    {
      description: 'Repository: ',
      value: currentArt.repository,
    },
  ];
  return (
    <CurrentArtPage>
      <ImageWithButton>
        <CurrentArtImage src={currentArt.imgSrc} alt="image of art" />
        <AddToFavButtonAbsolutePos>
          <AddToFavButton onClick={toggleFavHandler} $is_active={isFav}>
            <FavIcon src={favSvg} alt="toggle fav" />
          </AddToFavButton>
        </AddToFavButtonAbsolutePos>
      </ImageWithButton>
      <Info>
        <WrapperArtInfo>
          <TitleWrapper>
            <TitleInfo>{currentArt.title}</TitleInfo>
          </TitleWrapper>
          <ArtistName>
            {currentArt.artist ? currentArt.artist : 'Unknown'}
          </ArtistName>
          <ArtistDate>{currentArt.date}</ArtistDate>
        </WrapperArtInfo>
        <WrapperArtistInfo>
          <TitleWrapper>
            <TitleInfo>Overview</TitleInfo>
          </TitleWrapper>
          {descriptionArr.map((el) => (
            <Description key={el.description}>
              <span>{el.description}</span>
              {el.value}
            </Description>
          ))}
          <Description>{currentArt.access ? 'Public' : 'Private'}</Description>
        </WrapperArtistInfo>
      </Info>
    </CurrentArtPage>
  );
};
