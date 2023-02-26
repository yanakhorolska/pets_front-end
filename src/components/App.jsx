import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import SharedLayout from 'components/SharedLayout';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRotes';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from 'redux/selectors';
import { setCurrentUser } from 'redux/authSlice';
import { useGetCurrentUserQuery } from 'redux/authApi';

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
  const dispatch = useDispatch();
  const token = useSelector(getToken);

  const mockQuery = '';
  const { data } = useGetCurrentUserQuery(mockQuery, { skip: !token });

  useEffect(() => {
    if (!data) {
      return;
    }
    dispatch(setCurrentUser(data));
  }, [data, dispatch]);

  return (
    <>
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
        </Routes>
      </Suspense>
    </>
  );
};
