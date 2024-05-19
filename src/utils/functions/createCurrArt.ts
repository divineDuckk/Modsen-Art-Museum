import { Art } from '../interfaces';

export const createCurrArt = (
  art: Art,
  imageSrc: string,
  artistCountry: string,
  date: string,
  repository: string
) => {
  const currArt = {
    id: art.id,
    imgSrc: imageSrc,
    access: art.is_public_domain,
    artist: art.artist_title,
    title: art.title,
    country: artistCountry,
    criditeLine: art.credit_line,
    date: date,
    dimensions: art.dimensions,
    repository: repository,
    artist_display: art.artist_display,
    image_id: art.image_id,
  };
  return currArt;
};
