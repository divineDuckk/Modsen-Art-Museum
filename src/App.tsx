import { ErrorBoundary } from './components/ErrorBoundary/errorBoudary';
import { Footer } from './components/Footer/footer';
import { Gallery } from './components/Gallery/gallery';
import { Header } from './components/Header/header';
import { AnotherGallery } from './components/OtherWorksGallery/anotherGallery';
import { SearhInput } from './components/SearchInput/searhInput';
import { SearchResults } from './components/SearchResults/searchResults';
import { Title } from './components/Title/title';
import { Wrapper } from './components/Wrapper/styled';
import { Topic } from './components/YoursTopic/Topic';

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <Title />
        <SearhInput />
        <ErrorBoundary>
          <SearchResults />
        </ErrorBoundary>
        <Topic hText="Our special gallery" spanText="Topics for you" />
        <Gallery />
        <Topic hText="Other works for you" spanText="Here some more" />
        <AnotherGallery />
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
