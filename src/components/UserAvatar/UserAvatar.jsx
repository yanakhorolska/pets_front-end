import React from 'react'
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useGetCurrentUserQuery } from "../../redux/fetchUser.js"
// import { setUser } from 'redux/user/userSlice';

const UserAvatar = () => {
  // const { data } = useGetCurrentUserQuery();
  // // const [currentUser] = useGetCurrentUserQuery();
  const [avatar, setAvatar] = useState(null)
  // const dispatch = useDispatch();

//  console.log(data)

  function handleAvatarChange(event) {
    // const user = currentUser().unwrap();
    // console.log(user)

// dispatch(setUser(user))
    setAvatar(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <div>
      {avatar ? (
        <img src={avatar} alt="User Avatar" />
      ) : (
        <div>
          <label htmlFor="avatar-upload">Upload Avatar</label>
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
          />
        </div>
      )}
    </div>
  );
}

  

export default UserAvatar

