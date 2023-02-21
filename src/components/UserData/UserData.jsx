import React from 'react'
import UserAvatar from "../UserAvatar/UserAvatar"
import UserDataItem from 'components/UserDataItem/UserDataItem'

const UserData = () => {
  return (
      <div>
          <p>My Information</p>
          <UserAvatar />
          <UserDataItem />
    </div>
  )
}

export default UserData