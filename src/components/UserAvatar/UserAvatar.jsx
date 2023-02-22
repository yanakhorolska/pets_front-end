import React from 'react';
import { useSelector } from 'react-redux';
import { getUserAvatarURL } from 'redux/selectors';
import { useUpdateUserAvatarMutation } from '../../redux/fetchUser';
import { useDispatch } from 'react-redux';
// import { setUser } from 'redux/authSlice';
// import { useDispatch } from 'react-redux';
import { setAvatarURL } from '../../redux/authSlice';

const UserAvatar = () => {
  const dispatch = useDispatch();
  const avatarURL = useSelector(getUserAvatarURL);

  // const dispatch = useDispatch();
  const [updateUserAvatar] = useUpdateUserAvatarMutation();

  const handleAvatarChange = async event => {
    try {
      const file = event.target.files[0];
      const newAvatarURL = await updateUserAvatar(file).unwrap();
      dispatch(setAvatarURL(newAvatarURL.avatarURL));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <img src={avatarURL} alt="User" />

      <div>
        <label htmlFor="avatar-upload">Upload Avatar</label>
        <input
          name="avatar"
          id="avatar-upload"
          type="file"
          accept="image/*"
          onChange={e => handleAvatarChange(e)}
        />
      </div>
    </div>
  );
};

export default UserAvatar;
