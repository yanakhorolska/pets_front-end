import { useSelector } from 'react-redux';
import {
getIsLogged
} from '../redux/selectors.js';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLogged);


  return {
    isLoggedIn,
 
  };
};
