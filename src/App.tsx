import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ArtPage } from './Pages/Art/artPage';
import { FavoritePage } from './Pages/Favorite/favorite';
import { MainPage } from './Pages/Main/MainPage';
import { Footer } from './components/Footer/footer';
import { Header } from './components/Header/header';
import { Wrapper } from './components/Wrapper/styled';
import { getDataFromLocalStorage } from './constants/functions';
import { setFavArts } from './store/slices/favArtsSlice';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFavArts(getDataFromLocalStorage()));
  }, []);
  return (
    <>
      <Header />
      <Wrapper>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/arts/:id" element={<ArtPage />} />
        </Routes>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
