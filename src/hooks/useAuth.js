import { useSelector } from 'react-redux';
import { getToken } from '../redux/selectors.js';

export const useAuth = () => {
  const isLoggedIn = useSelector(getToken);
  return {
    isLoggedIn,
  };
};
