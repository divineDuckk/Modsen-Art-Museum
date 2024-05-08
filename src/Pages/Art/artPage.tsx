import { FavIcon } from '@/components/CardArt/styled';
import { alreadyInFavs } from '@/constants/functions';
import { currArt } from '@/store/selectors/currentArtSelectors';
import { favArts } from '@/store/selectors/favArtsSelectors';
import { FC } from 'react';
import { useSelector } from 'react-redux';
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
  const favs = useSelector(favArts);
  const currentArt = useSelector(currArt);
  return (
    <CurrentArtPage>
      <ImageWithButton>
        <CurrentArtImage src={currentArt?.imgSrc} alt="image of art" />
        <AddToFavButtonAbsolutePos
          is_active={alreadyInFavs(currentArt?.id, favs)}
        >
          <FavIcon src="/src/assets/fav.svg" alt="toggle fav" />
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
