import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';
// import AppRoutes from 'AppRoutes';
// const HomePage = lazy(() => import('../pages/HomePage'));
// const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
// const TweetsPage = lazy(() => import('../pages/TweetsPage'));
import HomePage from 'pages/HomePage';
import TweetsPage from 'pages/TweetsPage';
import NotFoundPage from 'pages/NotFoundPage';
export const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="tweets" element={<TweetsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    // <div style={{ margin: 'auto' }}>
    // <AppRoutes />
    // {/* </div> */}
  );
};
