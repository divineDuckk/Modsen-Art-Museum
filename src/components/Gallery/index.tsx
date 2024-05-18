import loader from '@/assets/loader.png';
import { useFetchArts } from '@/hooks/useFetchArts';
import { FC } from 'react';
import { CardArt } from '../CardArt';
import { SpinLoader } from '../SpinLoader/styled';
import { SwitcherPage } from '../SwitcherPage';
import { Group, LoaderWrapper, SwitcherWrap } from './styled';
export const Gallery: FC = () => {
  const { arts, isLoading, setActivePage, activePage } = useFetchArts();
  return (
    <>
      {!isLoading ? (
        <Group>
          {arts.length &&
            arts.map((art) => {
              return (
                <CardArt data-testid="gallery_cards" art={art} key={art.id} />
              );
            })}
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
