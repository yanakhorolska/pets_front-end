import { useSelector } from 'react-redux';
import { getIsLogged } from '../redux/selectors';

export const useAuth = () => {
  return useSelector(getIsLogged)
};
