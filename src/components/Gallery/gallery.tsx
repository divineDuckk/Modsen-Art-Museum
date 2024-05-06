import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL, LIMIT } from '../../constants/constants';
import {
  getArtistCountry,
  getArtistDate,
  getImageSrc,
} from '../../constants/functions';
import { RootState } from '../../store';
import { setArts } from '../../store/slices/gallerySlice';
import { CardArt } from '../CardArt/cardArt';
import { SkeletonCard } from '../SkeletonCard/skeletonCard';
import { SwitcherPage } from '../SwitcherPage/switcher';
import { StyledGroup, SwitcherWrap } from './styled';
export const Gallery: FC = () => {
  const arts = useSelector((state: RootState) => state.gallery.arts);
  const activePage = useSelector(
    (state: RootState) => state.gallery.activePage
  );
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchArts = async () => {
      try {
        setIsLoad(true);
        const res = await axios.get(BASE_URL, {
          params: { page: activePage, limit: LIMIT },
        });
        dispatch(setArts(res.data.data));
        setIsLoad(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArts();
  }, [activePage]);
  return (
    <>
      <StyledGroup>
        {arts.length &&
          arts.map((item, i) =>
            !isLoad ? (
              <CardArt
                id={item.id}
                access={item.is_public_domain}
                artist={item.artist_title}
                title={item.title}
                imgSrc={getImageSrc(item.image_id)}
                key={item.id}
                country={getArtistCountry(item.artist_display)}
                date={getArtistDate(item.artist_display)}
                criditeLine={item.credit_line}
                dimensions={item.dimensions}
                repository={
                  item.publication_history
                    ? item.publication_history.split(',')[0]
                    : 'No repository'
                }
              />
            ) : (
              <SkeletonCard key={i} />
            )
          )}
      </StyledGroup>
      <SwitcherWrap>
        <SwitcherPage />
      </SwitcherWrap>
    </>
  );
};
