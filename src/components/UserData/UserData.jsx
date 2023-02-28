import React, { useEffect } from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import UserDataItem from 'components/UserDataItem/UserDataItem';
import { getUser } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import LogoutButton from '../LogoutButton/LogoutButton';
import UserPageTitle from '../UserPageTitle/UserPageTitle';
import {
  UserDataBox,
  UserDataItemsBox,
  DataBox,
  TitleWrapperData,
} from './UserData.styled';
import { useTranslation } from 'react-i18next';
import { userProfileValidation } from '../../helpers/validation/userProfileValidation';
import { useFormik } from 'formik';
import { useUpdateUserMutation, useGetCurrentUserQuery} from 'redux/fetchUser';
import { setUpdatedUser, setCurrentUser } from 'redux/authSlice';

const UserData = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [updateUser] = useUpdateUserMutation();
 
  const { data } = useGetCurrentUserQuery();

  useEffect(() => {
    if (!data) {
       return;
    }
    dispatch(setCurrentUser(data));
  }, [data, dispatch]);

  const userFields = useSelector(getUser);
  const {
    name = '',
    email = '',
    birthday = '',
    phone = '',
    city = '',
  } = userFields;

  const info = {
    name,
    email,
    birthday,
    phone,
    city,
  };

  const _handleSubmit = async values => {
    try {
      const userData = Object.keys(values).reduce(
        (acc, key) => (values[key] ? { ...acc, [key]: values[key] } : acc),
        {}
      );
      await updateUser(userData);
      dispatch(setUpdatedUser(userData));
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: { ...info },

    onSubmit: _handleSubmit,
    validationSchema: userProfileValidation,
  });

  return (
    <DataBox>
      <TitleWrapperData>
        <UserPageTitle title={t('myInfo')} />
      </TitleWrapperData>

      <UserDataBox>
        <UserAvatar />
        <UserDataItemsBox onSubmit={formik.handleSubmit}>
          {Object.entries(formik.initialValues).map(item => (
            <UserDataItem key={item} item={item} formik={formik} />
          ))}
          <LogoutButton />
        </UserDataItemsBox>
      </UserDataBox>
    </DataBox>
  );
};

export default UserData;
