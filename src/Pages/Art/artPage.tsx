import { FC } from 'react';
import { useSelector } from 'react-redux';
import { alreadyInFavs } from '../../constants/functions';
import { RootState } from '../../store';
import {
  AddToFavButtonAbsolutePos,
  ArtistDate,
  ArtistName,
  Description,
  ImageWithButton,
  Info,
  StyledArtPage,
  TitleInfo,
  TitleWrapper,
} from './styled';
export const ArtPage: FC = () => {
  const favs = useSelector((state: RootState) => state.fav.arts);
  const currArt = useSelector((state: RootState) => state.curr.currentArt);
  return (
    <StyledArtPage>
      <ImageWithButton>
        <img src={currArt?.imgSrc} alt="image of art" />
        <AddToFavButtonAbsolutePos is_active={alreadyInFavs(currArt?.id, favs)}>
          <svg
            width="17"
            height="21"
            viewBox="0 0 17 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5 19.5L8.375 15.5L1.25 19.5V3.5C1.25 2.96957 1.46448 2.46086 1.84625 2.08579C2.22802 1.71071 2.74581 1.5 3.28571 1.5H13.4643C14.0042 1.5 14.522 1.71071 14.9038 2.08579C15.2855 2.46086 15.5 2.96957 15.5 3.5V19.5Z"
              stroke="#E0A449"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </AddToFavButtonAbsolutePos>
      </ImageWithButton>
      <Info>
        <TitleWrapper>
          <TitleInfo>{currArt?.title}</TitleInfo>
        </TitleWrapper>
        <ArtistName>{currArt?.artist ? currArt.artist : 'Unknown'}</ArtistName>
        <ArtistDate>{currArt?.date}</ArtistDate>
        <TitleWrapper>
          <TitleInfo>Overview</TitleInfo>
        </TitleWrapper>
        <Description>
          <span>Artist nacionality: </span>
          {currArt?.country}
        </Description>
        <Description>
          <span>Dimensions: Sheet: </span>
          {currArt?.dimensions}
        </Description>
        <Description>
          <span>Credit Line: </span>
          {currArt?.criditeLine}
        </Description>
        <Description>
          <span>Repository: </span>
          {currArt?.repository}
        </Description>
        <Description>{currArt?.access ? 'Public' : 'Private'}</Description>
      </Info>
    </StyledArtPage>
  );
};
