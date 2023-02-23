import React from 'react';
import { useSelector } from 'react-redux';
import { getUserAvatarURL } from 'redux/selectors';
import { useUpdateUserAvatarMutation } from '../../redux/fetchUser';
import { useDispatch } from 'react-redux';
import { setAvatarURL } from '../../redux/authSlice';
import { AvatarInput, AvatarLabel, AvatarImage } from './UserAvatar.styled';
import Icon from '../../styles/Buttons/icons';

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
      <AvatarImage src={avatarURL} alt="User" />

    
        <AvatarLabel htmlFor="avatar-upload">
          <Icon.Camera /> Edit photo</AvatarLabel>
        <AvatarInput
          name="avatar"
          id="avatar-upload"
          type="file"
          accept="image/*"
          // placeholder='Put the file'
          onChange={e => handleAvatarChange(e)}
        />
      
    </div>
  );
};

export default UserAvatar;
