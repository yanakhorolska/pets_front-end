import React from 'react'
import UserAvatar from "../UserAvatar/UserAvatar"
import UserDataItem from 'components/UserDataItem/UserDataItem'
import { getUser, getToken } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useGetUserQuery } from '../../redux/authApi';
import { setUser } from '../../redux/authSlice';
import { useEffect } from 'react';

const UserData = () => {
 const token = useSelector(getToken);
//  console.log(token)
  const dispatch = useDispatch();
  
  const { data, isLoading } = useGetUserQuery(token);
  

 const user = {...data, token}
console.log("data from back", user)
  useEffect(() => {
    if (!isLoading) {
      dispatch(setUser(user, token), []);
    }
  });

  const currentuser = useSelector(getUser)
  
  console.log("USER IN USERState", currentuser )

  return (
      <div>
          <p>My Information</p>
      <UserAvatar />
      <UserDataItem initialValues={{ name: currentuser.name }} name="name" value={currentuser.name} />
      <UserDataItem initialValues={{ email: currentuser.email }} name="email" value={currentuser.email} />
      <UserDataItem initialValues={{ birthday: currentuser.birthday }} name="birthday" value={currentuser.birthday} />
      <UserDataItem initialValues={{ city: currentuser.city }} name="city" value={currentuser.city} />
      <UserDataItem initialValues={{ phone: currentuser.phone }} name="phone" value={currentuser.phone} />
    </div>
  )
}

export default UserData