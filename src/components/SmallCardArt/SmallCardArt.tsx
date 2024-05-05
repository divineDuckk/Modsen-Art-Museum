import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findObjectById } from '../../constants/functions';
import { RootState } from '../../store';
import { addToFav, deleteFromFav } from '../../store/slices/favArtsSlice';
import { AddToFavButton } from '../CardArt/styled';
import { CardArtProps } from '../CardArt/types';
import { SmallStyledCardArt, SmallTextInfo } from './styled';
import { SmallCardArtProps } from './types';

export const SmallCardArt: FC<SmallCardArtProps> = ({
  imgSrc,
  access,
  artist,
  title,
  id,
  inFavotites = false,
}) => {
  const alreadyInFavs = (id: number) => {
    return favs.some((item) => item.id === id);
  };
  const favs = useSelector((state: RootState) => state.fav.arts);
  const [isFav, setIsFav] = useState<boolean>(alreadyInFavs(id));
  const dispatch = useDispatch();
  const addToFavHandler = (obj: CardArtProps) => () => {
    if (alreadyInFavs(obj.id)) return;
    setIsFav(true);
    localStorage.setItem(
      String(obj.id),
      JSON.stringify({ ...obj, isFav: true })
    );
    dispatch(addToFav({ ...obj, isFav: true }));
  };
  const deleteFromFavHandler = (id: number) => () => {
    setIsFav(false);
    localStorage.removeItem(String(id));
    dispatch(deleteFromFav(id));
  };
  useEffect(() => {
    const obj = findObjectById(id, favs);
    if (!obj) return;
    setIsFav(obj.isFav);
  }, [favs]);
  return (
    <SmallStyledCardArt>
      <img src={imgSrc} alt="small image art" />
      <SmallTextInfo>
        <p>{title}</p>
        <span>{artist !== null ? artist : 'Unknown'}</span>
        <br />
        <b> {access ? 'Public' : 'Private'}</b>
      </SmallTextInfo>
      <AddToFavButton
        onClick={
          inFavotites
            ? deleteFromFavHandler(id)
            : addToFavHandler({ access, artist, id, imgSrc, title })
        }
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
    </SmallStyledCardArt>
  );
};
