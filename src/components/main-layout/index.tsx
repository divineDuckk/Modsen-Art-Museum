import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import {
  ContentFooter,
  ContentWrapper,
  FooterLogo,
  ModsenLogo,
  Wrapper,
} from './styled';

import footerLogo from '@/assets/footerLogo.svg';
import modsenLogo from '@/assets/logoModsen.svg';
import { Header } from '@/components/header';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <ContentWrapper>
      <Header />
      <Wrapper>{children}</Wrapper>
      <ContentFooter>
        <Link to="/" data-testid="footer_logo">
          <FooterLogo src={footerLogo} alt="footer logo" />
        </Link>
        <ModsenLogo src={modsenLogo} alt="modsen logo" />
      </ContentFooter>
    </ContentWrapper>
  );
};
