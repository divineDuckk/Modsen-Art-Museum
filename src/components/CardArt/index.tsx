import { alreadyInFavs } from '@/functions';
import { CurrentArt } from '@/interfaces/CurrentArt';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { favArts } from '@/store/selectors/favArtsSelectors';
import { setCurrentArt } from '@/store/slices/currentArtSlice';
import { addToFav, deleteFromFav } from '@/store/slices/favArtsSlice';
import { setOnHomePage } from '@/store/slices/homeSlice';
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

export const CardArt: FC<CurrentArt> = ({
  imgSrc,
  id,
  access,
  artist,
  title,
  country,
  criditeLine,
  date,
  dimensions,
  repository,
}) => {
  const favs = useAppSelector(favArts);
  const [isFav, setIsFav] = useState(alreadyInFavs(id, favs));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
    <Card>
      <ArtImage
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
        src={imgSrc}
        alt="image of art"
      />
      <Info>
        <TextInfo>
          <ArtTitle>{title}</ArtTitle>
          <ArtistName>{artist !== null ? artist : 'Unknown'}</ArtistName>
          <br />
          <ArtAccess> {access ? 'Public' : 'Private'}</ArtAccess>
        </TextInfo>
        <AddToFavButton
          onClick={toggleFavHandler({
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
          $is_active={isFav}
        >
          <FavIcon src="./src/assets/fav.svg" alt="toggle fav" />
        </AddToFavButton>
      </Info>
    </Card>
  );
};
