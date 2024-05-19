import { Art, CurrentArt } from '../interfaces';

export const convertFromCurrArtToArt = (currentArt: CurrentArt) => {
  const art: Art = {
    artist_display: currentArt.artist_display,
    artist_title: currentArt.artist,
    credit_line: currentArt.criditeLine,
    dimensions: currentArt.dimensions,
    id: currentArt.id,
    image_id: currentArt.image_id,
    is_public_domain: currentArt.access,
    publication_history: currentArt.repository,
    title: currentArt.title,
  };
  return art;
};
