import favSvg from '@/assets/fav.svg';
import homeSvg from '@/assets/home.svg';
import logo from '@/assets/logo.svg';
import menu from '@/assets/menu.svg';
import { FavIcon } from '@/components/CardArt/styled';
import { FlexDiv } from '@/components/SearchForm/styled';
import { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation().pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuHandler = () => setIsMenuOpen(!isMenuOpen);

  return (
    <ContentHeader>
      <Link to="/">
        <HeaderModsenLogo src={logo} alt="logo" />
      </Link>
      <FlexDiv>
        <ButtonsWrapper $is_open={isMenuOpen}>
          {location !== '/' && (
            <HomeButton to="/" data-testid="to_home_page">
              <HomeIcon src={homeSvg} alt="home icon" />
              Home
            </HomeButton>
          )}
          <FavButton to="/favorites" data-testid="to_fav_page">
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
