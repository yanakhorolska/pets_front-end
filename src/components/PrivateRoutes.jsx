import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { getIsLogged } from '../redux/selectors';
import { useSelector } from 'react-redux';

const PrivateRoutes = () => {
  const isLogged = useSelector(getIsLogged);
  const location = useLocation();
  return isLogged ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ location }} replace />
  );
};

export default PrivateRoutes;
