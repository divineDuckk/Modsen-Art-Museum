import favSvg from '@/assets/fav.svg';
import homeSvg from '@/assets/home.svg';
import logo from '@/assets/logo.svg';
import menu from '@/assets/menu.svg';
import { onHome } from '@/store/selectors/homeSelectors';
import { setOnHomePage } from '@/store/slices/homeSlice';
import { FC, useState } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <ContentHeader>
      <Link to="/" onClick={clickLogoHandler}>
        <HeaderModsenLogo src={logo} alt="logo" />
      </Link>
      <FlexDiv>
        <ButtonsWrapper $is_open={isMenuOpen}>
          <HomeButton
            data-testid="to_home_page"
            $on_home_page={onHomePage}
            onClick={clickHomeHandler}
          >
            <HomeIcon src={homeSvg} alt="home icon" />
            Home
          </HomeButton>
          <FavButton data-testid="to_fav_page" onClick={toFavoritesHandler}>
            <FavIcon src={favSvg} alt="fav icon" />
            Your favorites
          </FavButton>
        </ButtonsWrapper>
        <BurgerButton onClick={toggleMenuHandler}>
          <BurgerIcon src={menu} alt="menu" />
        </BurgerButton>
      </FlexDiv>
    </ContentHeader>
  );
};
