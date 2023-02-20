import { useSelector, useDispatch } from 'react-redux';
import { getToken, getUser } from '../../redux/selectors'
import {  useGetUserQuery } from '../../redux/authApi'
// import{useGetCurrentUserQuery} from '../../redux/fetchUser'
import { setUser } from '../../redux/authSlice'
import { useEffect } from 'react';

const UserPage = () => {
  const token = useSelector(getToken)
  
  const dispatch = useDispatch()
const { data, isLoading } = useGetUserQuery(token)
 
  const user = { ...data }
  
/*---------------------*/
  
  useEffect(() => {
  

   
    if (!isLoading) {
      dispatch(setUser(user))
    }
  })
  const currentUser = useSelector(getUser)
    console.log("CurrentUser",currentUser)

  return <div>UserPage
    {/* <p>Name {data.name}</p> */}

  </div>;
};

export default UserPage;
