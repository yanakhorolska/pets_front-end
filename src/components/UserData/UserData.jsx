import React from 'react'
import UserAvatar from "../UserAvatar/UserAvatar"
import UserDataItem from 'components/UserDataItem/UserDataItem'
import { getUser } from 'redux/selectors';
import { useSelector } from 'react-redux';

const UserData = () => {
  const user = useSelector(getUser)
  
  console.log("USER IN USERState", user)

  return (
      <div>
          <p>My Information</p>
      <UserAvatar />
      <UserDataItem initialValues={{ name: user.name }} name="name" value={user.name} />
      <UserDataItem initialValues={{ email: user.email }} name="email" value={user.email} />
      <UserDataItem initialValues={{ birthday: user.birthday }} name="birthday" value={user.birthday} />
      <UserDataItem initialValues={{ phone: user.city }} name="city" value={user.city} />
      <UserDataItem initialValues={{ phone: user.phone }} name="phone" value={user.phone} />
    </div>
  )
}

export default UserData