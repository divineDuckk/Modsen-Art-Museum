import { Route, Routes } from 'react-router-dom';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RoutesArr } from '@/constants/constants';

import { MainLayout } from './components/MainLayout';

function App() {
  return (
    <ErrorBoundary>
      <MainLayout>
        <Routes>
          {RoutesArr.map((elem) => (
            <Route key={elem.path} path={elem.path} element={<elem.page />} />
          ))}
        </Routes>
      </MainLayout>
    </ErrorBoundary>
  );
}

export default App;
