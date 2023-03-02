import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense} from 'react';
import SharedLayout from 'components/SharedLayout';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRotes';
import { getToken } from 'redux/selectors';
import { useGetCurrentUserQuery } from 'redux/fetchUser';
import NoInternetConnection from './NointernetConnection/NoInternetConnection';
import { useSelector } from 'react-redux';
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

  const token = useSelector (getToken);
  useGetCurrentUserQuery({skip : !token})

  return (
    <NoInternetConnection>
      <Suspense>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/notices" element={<NoticesPage />}>
              <Route index element={<Navigate to="sell" />}></Route>
              <Route path=":category" element={<NoticesCategoriesList />} />
            </Route>
            <Route path="/friends" element={<OurFriendsPage />} />
            <Route element={<PublicRoutes restricted />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>
            <Route element={<PrivateRoutes />}>
              <Route path="/user" element={<UserPage />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </NoInternetConnection>
  );
};
