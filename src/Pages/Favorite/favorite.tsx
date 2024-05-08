import { FC } from 'react';
import { useSelector } from 'react-redux';
import { AnotherStyledGallery } from '../../components/OtherWorksGallery/styled';
import { SmallCardArt } from '../../components/SmallCardArt/SmallCardArt';
import { StyledTitle } from '../../components/Title/styled';
import { Topic } from '../../components/YoursTopic/Topic';
import { favArts } from '../../store/selectors/favArtsSelectors';
import { EmptyFavs, StyledFavoritePage } from './styled';

export const FavoritePage: FC = () => {
  const favs = useSelector(favArts);
  return (
    <StyledFavoritePage>
      <StyledTitle>
        Here Are Your <br />
        <span>
          <svg
            width="74"
            height="74"
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M53.2573 57.9032L36.9993 48.4409L20.7412 57.9032V20.0538C20.7412 18.799 21.2306 17.5956 22.1017 16.7083C22.9729 15.821 24.1544 15.3226 25.3864 15.3226H48.6122C49.8442 15.3226 51.0257 15.821 51.8968 16.7083C52.7679 17.5956 53.2573 18.799 53.2573 20.0538V57.9032Z"
              stroke="#F17900"
              strokeWidth="4.69765"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Favorites
        </span>
      </StyledTitle>
      <Topic hText="Your favorites list" spanText="Saved by you" />
      {favs.length ? (
        <AnotherStyledGallery colums={3} rows="auto">
          {favs.map((item) => (
            <SmallCardArt key={item.id} inFavotites {...item} />
          ))}
        </AnotherStyledGallery>
      ) : (
        <EmptyFavs>
          <p>Your favorites is empty</p>
          <img width={200} src="/src/assets/sad-icon.svg" alt="" />
        </EmptyFavs>
      )}
    </StyledFavoritePage>
  );
};
