import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Wrapper } from './components/Wrapper/styled';

import { ContentWrapper } from './components/ContentWrapper/styled';
import { ErrorBoundary } from './components/ErrorBoundary';
import { getDataFromLocalStorage } from './functions';
import { ArtPage } from './pages/art/artPage';
import { FavoritePage } from './pages/favorite/favorite';
import { MainPage } from './pages/home/MainPage';
import { useAppDispatch } from './store/hooks';
import { setFavArts } from './store/slices/favArtsSlice';
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setFavArts(getDataFromLocalStorage()));
  }, []);
  return (
    <ContentWrapper>
      <ErrorBoundary>
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/favorites" element={<FavoritePage />} />
            <Route path="/arts/:id" element={<ArtPage />} />
          </Routes>
        </Wrapper>
        <Footer />
      </ErrorBoundary>
    </ContentWrapper>
  );
}

export default App;
