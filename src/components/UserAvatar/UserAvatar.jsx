import React from 'react';
import { useSelector } from 'react-redux';
import { getUserAvatarURL } from 'redux/selectors';
import { useUpdateUserAvatarMutation } from '../../redux/fetchUser';
import { useDispatch } from 'react-redux';
import { setAvatarURL } from '../../redux/authSlice';
import { AvatarInput, AvatarLabel, AvatarImage } from './UserAvatar.styled';
import Icon from '../../styles/Buttons/icons';
import { useState } from 'react';

const UserAvatar = () => {
  const avatarURL = useSelector(getUserAvatarURL);
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(avatarURL);
  const [updateUserAvatar] = useUpdateUserAvatarMutation();

  const handleAvatarChange = async event => {
    try {
      const file = event.target.files[0];
      const { avatarURL } = await updateUserAvatar(file).unwrap();
      dispatch(setAvatarURL(avatarURL));
      setAvatar(avatarURL);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <AvatarImage src={avatar} alt="User" />

      <AvatarLabel htmlFor="avatar-upload">
        <Icon.Camera /> Edit photo
      </AvatarLabel>
      <AvatarInput
        name="avatar"
        id="avatar-upload"
        type="file"
        accept="image/*"
        onChange={e => handleAvatarChange(e)}
      />
    </div>
  );
};

export default UserAvatar;