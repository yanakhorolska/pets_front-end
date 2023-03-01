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
import { useUpdateUserMutation, useGetCurrentUserQuery } from 'redux/fetchUser';
import { setUpdatedUser, setCurrentUser } from 'redux/authSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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

  const convertDate = dateString => {
    const date = new Date(dateString);
    return [
      date.toLocaleString('default', { day: '2-digit' }),
      date.toLocaleString('default', { month: '2-digit' }),
      date.toLocaleString('default', { year: 'numeric' }),
    ].join('.');
    //return moment(date).format('DD.MM.YYYY');
  };

  const info = {
    name,
    email,
    birthday: convertDate(birthday),
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
      Notify.error(formik.errors[name], {
        pauseOnHover: true,
        fontSize: '16px',
        timeout: 5000,
      });
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
