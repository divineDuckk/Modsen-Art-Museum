import {
  AddToFavButton,
  ArtAccess,
  ArtTitle,
  ArtistName,
  FavIcon,
} from '@/components/CardArt/styled';
import {
  alreadyInFavs,
  createCurrArt,
  getArtistCountry,
  getArtistDate,
  getDataFromLocalStorage,
  getImageSrc,
} from '@/utils/functions';
import { FC, useState } from 'react';

import favSvg from '@/assets/fav.svg';
import { useNavigateToArt } from '@/hooks/useNavigateToArt';
import { useToggleFavHandler } from '@/hooks/useToggleFavHandler';

import { LittleArtImage, SmallStyledCardArt, SmallTextInfo } from './styled';
import { SmallCardArtProps } from './types';

export const SmallCardArt: FC<SmallCardArtProps> = ({ art, setFavs }) => {
  const artistCountry = getArtistCountry(art.artist_display);
  const imageSrc = getImageSrc(art.image_id);
  const date = getArtistDate(art.artist_display);
  const repository = art.publication_history
    ? art.publication_history.split(',')[0]
    : 'No repository';

  const currArt = createCurrArt(art, imageSrc, artistCountry, date, repository);
  const favs = getDataFromLocalStorage();

  const [isFav, setIsFav] = useState(alreadyInFavs(art.id));
  const onClickArt = useNavigateToArt();
  const toggleFavHandler = useToggleFavHandler({
    isFav,
    setIsFav,
    art,
    favs,
    setFavs,
  });

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
