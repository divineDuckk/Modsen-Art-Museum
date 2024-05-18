import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Gallery } from '@/components/Gallery';
import { AnotherGallery } from '@/components/OtherWorksGallery';
import { SearhForm } from '@/components/SearchForm';
import { SearchResults } from '@/components/SearchResults';
import { Title } from '@/components/Title';
import { Topic } from '@/components/YoursTopic';
import { useFetchSearchedArts } from '@/hooks/useFetchSearchedArts';
import { FC, useState } from 'react';

export const MainPage: FC = () => {
  const [needToRenderResults, setNeedToRenderResults] = useState(false);
  const { fetchSearching, isLoading, searchedArts, setSearchedArts } =
    useFetchSearchedArts();
  return (
    <>
      <Title />
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
