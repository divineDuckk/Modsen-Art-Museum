import favSvg from '@/assets/fav.svg';
import {
  alreadyInFavs,
  getArtistCountry,
  getArtistDate,
  getDataFromLocalStorage,
  getImageSrc,
  pushToLocalStorageFav,
  removeFromLocalStorageFav,
} from '@/functions';
import { CurrentArt } from '@/interfaces/CurrentArt';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AddToFavButton,
  ArtAccess,
  ArtTitle,
  ArtistName,
  FavIcon,
} from '../CardArt/styled';
import { LittleArtImage, SmallStyledCardArt, SmallTextInfo } from './styled';
import { SmallCardArtProps } from './types';
export const SmallCardArt: FC<SmallCardArtProps> = ({ art, setFavs }) => {
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
    navigate(`/arts/${art.id}`);
  };
  const toggleFavHandler = () => {
    setIsFav((prev) => !prev);
    if (isFav) {
      removeFromLocalStorageFav(art.id);
      setFavs && setFavs(favs.filter((el) => el.id !== art.id));
    } else {
      pushToLocalStorageFav(art, isFav);
      setFavs && setFavs([...favs, { ...art, isFav: !isFav }]);
    }
  };
  return (
    <SmallStyledCardArt>
      <LittleArtImage
        src={imageSrc}
        alt="small art image"
        onClick={onClickArt(currArt)}
      />
      <SmallTextInfo>
        <ArtTitle>{art.title}</ArtTitle>
        <ArtistName>
          {art.artist_title !== null ? art.artist_title : 'Unknown'}
        </ArtistName>
        <br />
        <ArtAccess> {art.is_public_domain ? 'Public' : 'Private'}</ArtAccess>
      </SmallTextInfo>
      <AddToFavButton onClick={toggleFavHandler} $is_active={isFav}>
        <FavIcon src={favSvg} alt="toggle fav" />
      </AddToFavButton>
    </SmallStyledCardArt>
  );
};
