import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import UserDataItem from 'components/UserDataItem/UserDataItem';
import { getUser } from 'redux/selectors';
import { useSelector } from 'react-redux';
import LogoutButton from '../LogoutButton/LogoutButton';
import UserPageTitle from '../UserPageTitle/UserPageTitle';
import {
  UserDataBox,
  UserDataItemsBox,
  DataBox,
  TitleWrapperData,
} from './UserData.styled';
import { useTranslation } from 'react-i18next';
const UserData = () => {
  const { t } = useTranslation();
  const currentuser = useSelector(getUser);

  let date = new Date(currentuser.birthday).toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  console.log(date);
  return (
    <DataBox>
      <TitleWrapperData>
        <UserPageTitle title={t('myInfo')} />
      </TitleWrapperData>
      <UserDataBox>
        <UserAvatar />
        <UserDataItemsBox>
          <UserDataItem
            initialValues={{ name: currentuser.name }}
            name={t('name')}
            text="name"
            type="text"
            placeholder={currentuser.name}
          />
          <UserDataItem
            initialValues={{ email: currentuser.email }}
            name={t('email')}
            text="email"
            type="email"
            placeholder={currentuser.email}
          />
          <UserDataItem
            initialValues={{ birthday: currentuser.birthday }}
            name={t('birthday')}
            text="birthday"
            type="text"
            placeholder={date === 'Invalid Date' ? '00.00.0000' : date}
          />
          <UserDataItem
            initialValues={{ phone: currentuser.phone }}
            name={t('phone')}
            text="phone"
            type="tel"
            placeholder={currentuser.phone}
          />
          <UserDataItem
            initialValues={{ city: currentuser.city }}
            name={t('city')}
            text="city"
            type="text"
            placeholder={currentuser.city}
          />

          <LogoutButton />
        </UserDataItemsBox>
      </UserDataBox>
    </DataBox>
  );
};

export default UserData;
