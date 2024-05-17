import loader from '@/assets/loader.png';
import { getArtistCountry, getArtistDate, getImageSrc } from '@/functions';
import { FC } from 'react';
import { CardArt } from '../CardArt';
import { SpinLoader } from '../SpinLoader/styled';
import { SwitcherPage } from '../SwitcherPage';
import { useFetchArts } from '../hooks/useFetchArts';
import { Group, LoaderWrapper, SwitcherWrap } from './styled';
export const Gallery: FC = () => {
  const { arts, isLoading, setActivePage, activePage } = useFetchArts();
  return (
    <>
      {!isLoading ? (
        <Group>
          {arts.length &&
            arts.map(
              ({
                id,
                is_public_domain,
                artist_title,
                title,
                image_id,
                artist_display,
                credit_line,
                dimensions,
                publication_history,
              }) => {
                const artistCountry = getArtistCountry(artist_display);
                const imageSrc = getImageSrc(image_id);
                const date = getArtistDate(artist_display);
                const repository = publication_history
                  ? publication_history.split(',')[0]
                  : 'No repository';
                return (
                  <CardArt
                    data-testid="gallery_cards"
                    id={id}
                    access={is_public_domain}
                    artist={artist_title}
                    title={title}
                    imgSrc={imageSrc}
                    key={id}
                    country={artistCountry}
                    date={date}
                    criditeLine={credit_line}
                    dimensions={dimensions}
                    repository={repository}
                  />
                );
              }
            )}
        </Group>
      ) : (
        <LoaderWrapper>
          <SpinLoader src={loader} alt="loader" />
        </LoaderWrapper>
      )}
      <SwitcherWrap>
        <SwitcherPage activePage={activePage} setActivePage={setActivePage} />
      </SwitcherWrap>
    </>
  );
};
