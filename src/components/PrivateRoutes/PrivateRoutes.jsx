import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

const PrivateRoutes = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoutes;
