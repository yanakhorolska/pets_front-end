import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserAvatarURL } from 'redux/selectors';
import { useUpdateUserAvatarMutation } from '../../redux/fetchUser';
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
  const avatar = useSelector(getUserAvatarURL);
  // const [avatar, setAvatar] = useState(avatarURL);
  const [updateUserAvatar] = useUpdateUserAvatarMutation();

  const handleAvatarChange = async event => {
    try {
      const file = event.target.files[0];
      await updateUserAvatar(file).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   setAvatar(avatarURL);
  // }, [avatarURL]);

  return (
    <AvatarBox>
      {avatar ? (
        <AvatarImage src={avatar} alt="User" />
      ) : (
        <AvatarImage src={Emptyphoto} />
      )}

      <AvatarLabel
        style={{ display: 'flex', gap: '5px' }}
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
