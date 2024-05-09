import { alreadyInFavs } from '@/functions';
import { CurrentArt } from '@/interfaces/CurrentArt';
import { useAppDispatch } from '@/store/hooks';
import { favArts } from '@/store/selectors/favArtsSelectors';
import { setCurrentArt } from '@/store/slices/currentArtSlice';
import { addToFav, deleteFromFav } from '@/store/slices/favArtsSlice';
import { setOnHomePage } from '@/store/slices/homeSlice';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
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

export const SmallCardArt: FC<SmallCardArtProps> = ({
  imgSrc,
  access,
  artist,
  title,
  id,
  country,
  criditeLine,
  date,
  dimensions,
  repository,
}) => {
  const favs = useSelector(favArts);
  const [isFav, setIsFav] = useState(alreadyInFavs(id, favs));
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onClickArt = (obj: CurrentArt) => () => {
    dispatch(setOnHomePage(false));
    dispatch(setCurrentArt(obj));
    navigate(`/arts/${id}`);
  };
  const toggleFavHandler = (art: CurrentArt) => () => {
    setIsFav((prev) => !prev);
    if (isFav) {
      localStorage.removeItem(String(id));
      dispatch(deleteFromFav(id));
    } else {
      localStorage.setItem(
        String(art.id),
        JSON.stringify({ ...art, isFav: !isFav })
      );
      dispatch(addToFav({ ...art, isFav: !isFav }));
    }
  };
  return (
    <SmallStyledCardArt>
      <LittleArtImage
        src={imgSrc}
        alt="small art image"
        onClick={onClickArt({
          id,
          imgSrc,
          access,
          artist,
          title,
          country,
          criditeLine,
          date,
          dimensions,
          repository,
        })}
      />
      <SmallTextInfo>
        <ArtTitle>{title}</ArtTitle>
        <ArtistName>{artist !== null ? artist : 'Unknown'}</ArtistName>
        <br />
        <ArtAccess> {access ? 'Public' : 'Private'}</ArtAccess>
      </SmallTextInfo>
      <AddToFavButton
        onClick={toggleFavHandler({
          access,
          artist,
          id,
          imgSrc,
          title,
          country,
          criditeLine,
          date,
          dimensions,
          repository,
        })}
        $is_active={isFav}
      >
        <FavIcon src="./src/assets/fav.svg" alt="toggle fav" />
      </AddToFavButton>
    </SmallStyledCardArt>
  );
};
