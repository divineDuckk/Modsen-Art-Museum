import {
  alreadyInFavs,
  createCurrArt,
  getArtistCountry,
  getArtistDate,
  getImageSrc,
} from '@/utils/functions';
import { FC, useState } from 'react';
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

import favSvg from '@/assets/fav.svg';
import { useNavigateToArt } from '@/hooks/useNavigateToArt';
import { useToggleFavHandler } from '@/hooks/useToggleFavHandler';

import { CardArtProps } from './types';

export const CardArt: FC<CardArtProps> = ({ art }) => {
  const artistCountry = getArtistCountry(art.artist_display);
  const imageSrc = getImageSrc(art.image_id);
  const date = getArtistDate(art.artist_display);
  const repository = art.publication_history
    ? art.publication_history.split(',')[0]
    : 'No repository';

  const currArt = createCurrArt(art, imageSrc, artistCountry, date, repository);

  const [isFav, setIsFav] = useState(alreadyInFavs(art.id));
  const onClickArt = useNavigateToArt();
  const toggleFavHandler = useToggleFavHandler({ isFav, setIsFav, art });

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
