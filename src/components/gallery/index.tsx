import { FC } from 'react';

import { CardArt } from '@/components/card-art';
import { SwitcherPage } from '@/components/switcher-page';
import { useFetchArts } from '@/hooks/useFetchArts';
import loader from '@/assets/loader.png';

import { Group, LoaderWrapper, SpinLoader, SwitcherWrap } from './styled';

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
