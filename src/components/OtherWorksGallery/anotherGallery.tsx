import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL, BIG_LIMIT } from '../../constants/constants';
import { getImageSrc } from '../../constants/functions';
import { RootState } from '../../store';
import { setArts } from '../../store/slices/anotherGallerySlice';
import { SkeletonSmallCard } from '../SkeletonSmallCard/skeletonSmallCard';
import { SmallCardArt } from '../SmallCardArt/SmallCardArt';
import { AnotherStyledGallery } from './styled';
export const AnotherGallery: FC = () => {
  const anotherGalleryArts = useSelector(
    (state: RootState) => state.anotherGallery.arts
  );
  const [isLoad, setIsLoad] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAnotherArts = async () => {
      try {
        setIsLoad(true);
        const res = await axios.get(BASE_URL, {
          params: {
            limit: BIG_LIMIT,
          },
        });
        dispatch(setArts(res.data.data));
        setIsLoad(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchAnotherArts();
  }, []);
  return (
    <AnotherStyledGallery colums={3} rows={3}>
      {anotherGalleryArts.map((item) =>
        !isLoad ? (
          <SmallCardArt
            access={item.is_public_domain}
            artist={item.artist_title}
            id={item.id}
            title={item.title}
            imgSrc={getImageSrc(item.image_id)}
            key={item.id}
          />
        ) : (
          <SkeletonSmallCard key={item.id} />
        )
      )}
    </AnotherStyledGallery>
  );
};
