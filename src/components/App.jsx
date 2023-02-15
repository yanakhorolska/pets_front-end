import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from 'components/SharedLayout';

const Home = lazy(() => import('pages/Home'));
const News = lazy(() => import('pages/News'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
    </>
  );
};
