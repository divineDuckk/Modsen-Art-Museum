import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { alreadyInFavs, findObjectById } from '../../constants/functions';
import { CurrentArt } from '../../interfaces/CurrentArt';
import { RootState } from '../../store';
import { setCurrentArt } from '../../store/slices/currentArtSlice';
import { addToFav } from '../../store/slices/favArtsSlice';
import { AddToFavButton, Card, Info, TextInfo } from './styled';

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
  const favs = useSelector((state: RootState) => state.fav.arts);
  const [isFav, setIsFav] = useState<boolean>(alreadyInFavs(id, favs));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClickArt = (obj: CurrentArt) => () => {
    dispatch(setCurrentArt(obj));
    navigate(`/arts/${id}`);
  };
  const addToFavHandler = (obj: CurrentArt) => () => {
    if (alreadyInFavs(obj.id, favs)) return;
    setIsFav(true);
    localStorage.setItem(
      String(obj.id),
      JSON.stringify({ ...obj, isFav: true })
    );
    dispatch(addToFav({ ...obj, isFav: true }));
  };
  useEffect(() => {
    const obj = findObjectById(id, favs);
    if (!obj) return;
    setIsFav(obj.isFav);
  }, [favs]);
  return (
    <Card>
      <img
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
          <p>{title}</p>
          <span>{artist !== null ? artist : 'Unknown'}</span>
          <br />
          <b> {access ? 'Public' : 'Private'}</b>
        </TextInfo>
        <AddToFavButton
          onClick={addToFavHandler({
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
          is_active={isFav}
        >
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
        </AddToFavButton>
      </Info>
    </Card>
  );
};
