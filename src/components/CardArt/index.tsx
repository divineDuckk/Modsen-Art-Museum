import favSvg from '@/assets/fav.svg';
import {
  alreadyInFavs,
  getArtistCountry,
  getArtistDate,
  getDataFromLocalStorage,
  getImageSrc,
  pushCurrArtToSessionStorage,
  pushToLocalStorageFav,
  removeFromLocalStorageFav,
} from '@/functions';
import { CurrentArt } from '@/interfaces/CurrentArt';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  AddToFavButton,
  ArtAccess,
  ArtImage,
  ArtTitle,
  ArtistName,
  Card,
  FavIcon,
  Info,
  TextInfo,
} from './styled';
import { CardArtProps } from './types';

export const CardArt: FC<CardArtProps> = ({ art }) => {
  const artistCountry = getArtistCountry(art.artist_display);
  const imageSrc = getImageSrc(art.image_id);
  const date = getArtistDate(art.artist_display);
  const repository = art.publication_history
    ? art.publication_history.split(',')[0]
    : 'No repository';

  const currArt = {
    id: art.id,
    imgSrc: imageSrc,
    access: art.is_public_domain,
    artist: art.artist_title,
    title: art.title,
    country: artistCountry,
    criditeLine: art.credit_line,
    date: date,
    dimensions: art.dimensions,
    repository: repository,
    artist_display: art.artist_display,
    image_id: art.image_id,
  };

  const favs = getDataFromLocalStorage();
  const [isFav, setIsFav] = useState(alreadyInFavs(art.id, favs));

  const navigate = useNavigate();

  const onClickArt = (art: CurrentArt) => () => {
    pushCurrArtToSessionStorage(art);
    navigate(`/arts/${art.id}`);
  };

  const toggleFavHandler = () => {
    setIsFav((prev) => !prev);
    if (isFav) {
      removeFromLocalStorageFav(art.id);
    } else {
      pushToLocalStorageFav(art, isFav);
    }
  };

  return (
    <Card>
      <ArtImage
        onClick={onClickArt(currArt)}
        src={imageSrc}
        alt="image of art"
      />
      <Info>
        <TextInfo>
          <ArtTitle>{art.title}</ArtTitle>
          <ArtistName>
            {art.artist_title !== null ? art.artist_title : 'Unknown'}
          </ArtistName>
          <br />
          <ArtAccess> {art.is_public_domain ? 'Public' : 'Private'}</ArtAccess>
        </TextInfo>
        <AddToFavButton onClick={toggleFavHandler} $is_active={isFav}>
          <FavIcon src={favSvg} alt="toggle fav" />
        </AddToFavButton>
      </Info>
    </Card>
  );
};
