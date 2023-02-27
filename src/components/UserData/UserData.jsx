import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import UserDataItem from 'components/UserDataItem/UserDataItem';
import { getUser } from 'redux/selectors';
import { useSelector } from 'react-redux';
import moment from 'moment';
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
  const { name, email, birthday, phone, city } = useSelector(getUser);

  const convertDate = date => {
    return moment(date).format('DD.MM.YYYY');
  }; 
  // const date = new Date(birthday).toLocaleDateString('en-GB');

  const info = {
    name,
    email,
    birthday: convertDate(birthday),
    phone,
    city,
  };

  return (
    <DataBox>
      <TitleWrapperData>
        <UserPageTitle title={t('myInfo')} />
      </TitleWrapperData>
      <UserDataBox>
        <UserAvatar />
        <UserDataItemsBox>
          <ul>
            {Object.entries(info).map(item => (
              <UserDataItem key={item} item={item} />
            ))}
          </ul>
          <LogoutButton />
        </UserDataItemsBox>
      </UserDataBox>
    </DataBox>
  );
};

export default UserData;
