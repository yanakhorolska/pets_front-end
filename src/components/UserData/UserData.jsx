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
import { userProfileValidation } from '../../helpers/validation/userProfileValidation';
import { useFormik } from 'formik';

const UserData = () => {
  const { t } = useTranslation();

  const userFields = useSelector(getUser);
  const {
    name = '',
    email = '',
    birthday = '',
    phone = '',
    city = '',
  } = userFields;
  console.log(userFields);

  // const date = new Date(birthday).toLocaleDateString('en-GB');

  const info = {
    name,
    email,
    birthday,
    phone,
    city,
  };

  const _handleSubmit = (values, actions) => {
    // if (pageNumber === 2) {
    //   _submitForm(values, actions);
    // } else {
    //   setPageNumber(2);
    //   actions.setTouched({});
    //   actions.setSubmitting(false);
    // }
  };

  const formik = useFormik({
    initialValues: { ...info },
    //   name: '3234',
    //   email: '',
    //   birthday: '',
    //   phone: '',
    //   city: '',
    // },
    onSubmit: _handleSubmit,
    validationSchema: userProfileValidation,
  });

  // console.log(formik);

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
