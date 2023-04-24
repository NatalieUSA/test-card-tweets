import { lazy } from 'react';

// import HomePage from 'pages/HomePage';
// import NotFoundPage from 'pages/NotFoundPage';
// import TweetsPage from 'pages/TweetsPage';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const TweetsPage = lazy(() => import('./pages/TweetsPage'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/tweets" element={<TweetsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default AppRoutes;
