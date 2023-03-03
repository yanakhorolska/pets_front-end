import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

const PrivateRoutes = () => {
  const isLogged = useAuth();
  const location = useLocation();
  return isLogged ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ location }} replace />
  );
};

export default PrivateRoutes;
