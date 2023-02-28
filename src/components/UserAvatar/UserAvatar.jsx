import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserAvatarURL } from 'redux/selectors';
import { useUpdateUserAvatarMutation } from '../../redux/fetchUser';
import { useDispatch } from 'react-redux';
import { setAvatarURL } from '../../redux/authSlice';
import {
  AvatarInput,
  AvatarLabel,
  AvatarImage,
  AvatarLabelText,
  AvatarBox,
} from './UserAvatar.styled';
import Icon from '../../styles/Buttons/icons';
import { useState } from 'react';
import Emptyphoto from '../../images/bgs/EmptyPhoto.png';
import { useTranslation } from 'react-i18next';
const UserAvatar = () => {
  const { t } = useTranslation();
  const avatarURL = useSelector(getUserAvatarURL);
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(avatarURL);
  const [updateUserAvatar] = useUpdateUserAvatarMutation();

  const handleAvatarChange = async event => {
    try {
      const file = event.target.files[0];
      const { avatarURL } = await updateUserAvatar(file).unwrap();
      dispatch(setAvatarURL(avatarURL));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setAvatar(avatarURL);
  }, [avatarURL]);

  return (
    <AvatarBox>
      {avatar ? (
        <AvatarImage src={avatar} alt="User" />
      ) : (
        <AvatarImage src={Emptyphoto} />
      )}

      <AvatarLabel
        style={{ display: 'flex', gap: '5px' }}
        htmlFor="avatar-upload"
      >
        <Icon.Camera />
        <AvatarLabelText>{t('editPhoto')}</AvatarLabelText>
      </AvatarLabel>
      <AvatarInput
        name="avatar"
        id="avatar-upload"
        type="file"
        accept="image/*"
        onChange={e => handleAvatarChange(e)}
      />
    </AvatarBox>
  );
};

export default UserAvatar;
