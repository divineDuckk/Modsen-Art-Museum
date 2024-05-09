import { onHome } from '@/store/selectors/homeSelectors';
import { setOnHomePage } from '@/store/slices/homeSlice';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FavIcon } from '../CardArt/styled';
import { FlexDiv } from '../SearchForm/styled';
import {
  BurgerButton,
  BurgerIcon,
  ButtonsWrapper,
  ContentHeader,
  FavButton,
  HeaderModsenLogo,
  HomeButton,
  HomeIcon,
} from './styled';
export const Header: FC = () => {
  const navigate = useNavigate();
  const onHomePage = useSelector(onHome);
  const dispatch = useDispatch();
  const toFavoritesHandler = () => {
    setIsMenuOpen(false);
    dispatch(setOnHomePage(false));
    navigate('/favorites');
  };
  const clickLogoHandler = () => {
    dispatch(setOnHomePage(true));
  };
  const clickHomeHandler = () => {
    setIsMenuOpen(false);
    navigate('/');
    dispatch(setOnHomePage(true));
  };
  useEffect(() => {
    console.log(onHomePage);
  }, [onHomePage]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <ContentHeader>
      <Link to="/" onClick={clickLogoHandler}>
        <HeaderModsenLogo src="/src/assets/logo.svg" alt="logo" />
      </Link>
      <FlexDiv>
        <ButtonsWrapper $is_open={isMenuOpen}>
          <HomeButton
            data-testid="to_home_page"
            $on_home_page={onHomePage}
            onClick={clickHomeHandler}
          >
            <HomeIcon src="/src/assets/home.svg" alt="home icon" />
            Home
          </HomeButton>
          <FavButton data-testid="to_fav_page" onClick={toFavoritesHandler}>
            <FavIcon src="/src/assets/fav.svg" alt="fav icon" />
            Your favorites
          </FavButton>
        </ButtonsWrapper>
        <BurgerButton onClick={toggleMenuHandler}>
          <BurgerIcon src="/src/assets/menu.svg" alt="menu" />
        </BurgerButton>
      </FlexDiv>
    </ContentHeader>
  );
};
