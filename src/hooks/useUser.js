import { useSelector } from 'react-redux';
import { getUser } from '../redux/selectors.js';

export const useUser = () => {
  const userData = useSelector(getUser);
  return {
    userData,
  };
};
