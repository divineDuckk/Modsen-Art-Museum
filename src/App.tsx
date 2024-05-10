import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ArtPage } from './Pages/Art/artPage';
import { FavoritePage } from './Pages/Favorite/favorite';
import { MainPage } from './Pages/Main/MainPage';
import { ContentWrapper } from './components/ContentWrapper/styled';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Wrapper } from './components/Wrapper/styled';

import { getDataFromLocalStorage } from './functions';
import { useAppDispatch } from './store/hooks';
import { setFavArts } from './store/slices/favArtsSlice';
function App() {
  const dispatch = useAppDispatch();
  const deleteActivePage = () => {
    localStorage.removeItem('activePage');
  };
  useEffect(() => {
    dispatch(setFavArts(getDataFromLocalStorage()));
    window.addEventListener('unload', deleteActivePage);
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
