import { useSelector } from 'react-redux';
import { getUser } from '../redux/selectors.js';

export const useUser = () => {
  return useSelector(getUser);
};
