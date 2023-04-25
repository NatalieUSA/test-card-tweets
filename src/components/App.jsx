import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import TweetsPage from 'pages/TweetsPage';

export const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="tweets" element={<TweetsPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>

  );
};
