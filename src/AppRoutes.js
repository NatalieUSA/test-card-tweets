import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage';
import TweetsPage from 'pages/TweetsPage';
import { Routes, Route } from 'react-router-dom';

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
