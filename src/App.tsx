import { Gallery } from './components/Gallery/gallery';
import { Header } from './components/Header/header';
import { SearhInput } from './components/SearchInput/searhInput';
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
        <Topic />
        <Gallery />
      </Wrapper>
    </>
  );
}

export default App;
