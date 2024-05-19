import { useNavigate } from 'react-router-dom';

import { pushCurrArtToSessionStorage } from '@/utils/functions';
import { CurrentArt } from '@/utils/interfaces/currentArt';

type NavigateToArtFunction = (art: CurrentArt) => () => void;

export const useNavigateToArt = (): NavigateToArtFunction => {
  const navigate = useNavigate();

  const onClickArt = (art: CurrentArt) => () => {
    pushCurrArtToSessionStorage(art);
    navigate(`/arts/${art.id}`);
  };

  return onClickArt;
};
