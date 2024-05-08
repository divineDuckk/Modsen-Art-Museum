import { FC } from 'react';
import { MainTitle, SubMainText } from './styled';

export const Title: FC = () => {
  return (
    <MainTitle>
      Let's Find Some <SubMainText>Art</SubMainText> Here!
    </MainTitle>
  );
};
