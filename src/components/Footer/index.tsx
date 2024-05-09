import footerLogo from '@/assets/footerLogo.svg';
import modsenLogo from '@/assets/logoModsen.svg';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ContentFooter, FooterLogo, ModsenLogo } from './styled';
export const Footer: FC = () => {
  return (
    <ContentFooter>
      <Link to="/" data-testid="footer_logo">
        <FooterLogo src={footerLogo} alt="footer logo" />
      </Link>
      <ModsenLogo src={modsenLogo} alt="modsen logo" />
    </ContentFooter>
  );
};
