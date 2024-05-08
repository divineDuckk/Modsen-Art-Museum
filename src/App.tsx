import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ArtPage } from './Pages/Art/artPage';
import { FavoritePage } from './Pages/Favorite/favorite';
import { MainPage } from './Pages/Main/MainPage';
import { ContentWrapper } from './components/ContentWrapper/styled';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Wrapper } from './components/Wrapper/styled';
import { getDataFromLocalStorage } from './constants/functions';
import { setFavArts } from './store/slices/favArtsSlice';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFavArts(getDataFromLocalStorage()));
  }, []);
  return (
    <ContentWrapper>
      <Header />
      <Wrapper>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/arts/:id" element={<ArtPage />} />
        </Routes>
      </Wrapper>
      <Footer />
    </ContentWrapper>
  );
}

export default App;
