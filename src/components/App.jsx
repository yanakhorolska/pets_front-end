import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { SharedLayout } from 'components/SharedLayout';
import PrivateRoutes from 'components/PrivateRoutes';

const Home = lazy(() => import('pages/Home'));
const NewsPage = lazy(() => import('pages/NewsPage'));
const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const UserPage = lazy(() => import('pages/UserPage'));
const NoticesCategoriesList = lazy(() =>
  import('components/NoticesCategoriesList')
);

export const App = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/notices" element={<NoticesPage />}>
              <Route index element={<NoticesCategoriesList />} />
              <Route path="lost-found" element={<NoticesCategoriesList />} />
              <Route path="for-free" element={<NoticesCategoriesList />} />
              <Route path="sell" element={<NoticesCategoriesList />} />
              <Route element={<PrivateRoutes />}>
                <Route path="favorite" element={<NoticesCategoriesList />} />
                <Route path="own" element={<NoticesCategoriesList />} />
              </Route>
            </Route>
            <Route path="/friends" element={<OurFriendsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route element={<PrivateRoutes component={<UserPage />} />}>
              <Route path="/user" element={<UserPage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
