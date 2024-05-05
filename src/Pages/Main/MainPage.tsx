import { FC } from 'react';
import { ErrorBoundary } from '../../components/ErrorBoundary/errorBoudary';
import { Gallery } from '../../components/Gallery/gallery';
import { AnotherGallery } from '../../components/OtherWorksGallery/anotherGallery';
import { SearhInput } from '../../components/SearchInput/searhInput';
import { SearchResults } from '../../components/SearchResults/searchResults';
import { Title } from '../../components/Title/title';
import { Topic } from '../../components/YoursTopic/Topic';

export const MainPage: FC = () => {
  return (
    <>
      <Title />
      <SearhInput />
      <ErrorBoundary>
        <SearchResults />
      </ErrorBoundary>
      <Topic hText="Our special gallery" spanText="Topics for you" />
      <Gallery />
      <Topic hText="Other works for you" spanText="Here some more" />
      <AnotherGallery />
    </>
  );
};
