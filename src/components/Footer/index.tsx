import { FC } from 'react';
import { ContentFooter, FooterLogo, ModsenLogo } from './styled';

export const Footer: FC = () => {
  return (
    <ContentFooter>
      <FooterLogo src="./src/assets/footerLogo.svg" alt="footer logo" />
      <ModsenLogo src="./src/assets/logoModsen.svg" alt="modsen logo" />
    </ContentFooter>
  );
};
