import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ContentFooter, FooterLogo, ModsenLogo } from './styled';

export const Footer: FC = () => {
  return (
    <ContentFooter>
      <Link to="/" data-testid="footer_logo">
        <FooterLogo src="./src/assets/footerLogo.svg" alt="footer logo" />
      </Link>
      <ModsenLogo src="./src/assets/logoModsen.svg" alt="modsen logo" />
    </ContentFooter>
  );
};
