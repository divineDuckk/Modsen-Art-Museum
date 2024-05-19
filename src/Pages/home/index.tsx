import { FC, useState } from 'react';

import { ErrorBoundary } from '@/components/error-boundary';
import { Gallery } from '@/components/gallery';
import { AnotherGallery } from '@/components/other-works-gallery';
import { SearhForm } from '@/components/search-form';
import { SearchResults } from '@/components/search-results';
import { Topic } from '@/components/yours-topic';
import { useFetchSearchedArts } from '@/hooks/useFetchSearchedArts';

import { MainTitle, SubMainText } from './styled';

export const MainPage: FC = () => {
  const [needToRenderResults, setNeedToRenderResults] = useState(false);
  const { fetchSearching, isLoading, searchedArts, setSearchedArts } =
    useFetchSearchedArts();
  return (
    <>
      <MainTitle>
        Let's Find Some <SubMainText>Art</SubMainText> Here!
      </MainTitle>
      <SearhForm
        needToRenderResults={needToRenderResults}
        setNeedToRenderResults={setNeedToRenderResults}
        fetchSearching={fetchSearching}
        setSearchedArts={setSearchedArts}
        isLoading={isLoading}
      />
      <ErrorBoundary>
        <SearchResults
          searchedArts={searchedArts}
          isLoading={isLoading}
          needToRenderResults={needToRenderResults}
        />
      </ErrorBoundary>
      <Topic hText="Our special gallery" spanText="Topics for you" />
      <Gallery />
      <Topic hText="Other works for you" spanText="Here some more" />
      <AnotherGallery />
    </>
  );
};
