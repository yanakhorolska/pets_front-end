import { useSelector } from 'react-redux';
import { getIsLogged } from '../redux/selectors.js';

export const useAuth = () => {
  return useSelector(getIsLogged);
};
