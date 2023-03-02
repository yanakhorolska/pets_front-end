import UserAvatar from '../UserAvatar/UserAvatar';
import UserDataItem from 'components/UserDataItem/UserDataItem';
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
import { useUpdateUserMutation } from 'redux/fetchUser';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useUser } from 'hooks/useUser';
import { useMemo } from 'react';

const getLabel = fildName => {
  return fildName.toLowerCase();
};

const getInputType = (fildName) => {
  if (fildName === 'birthday') {
    return 'date';
  }
  return 'text';
};

const convertDate = dateString => {
  if (!dateString) return "0000-00-00"
  const date = new Date(dateString);
  return [
    date.toLocaleString('default', { year: 'numeric' }),
    date.toLocaleString('default', { month: '2-digit' }),
    date.toLocaleString('default', { day: '2-digit' }),
  ].join('-');
};

const UserData = () => {
  const { t } = useTranslation();
  const [updateUser] = useUpdateUserMutation(); 

  const userFields = useUser();

  const info = useMemo(() => {
    const {
      name = '',
      email = '',
      birthday = "0000-00-00",
      phone = '',
      city = '',
    } = userFields;

    return {
      name,
      email,
      birthday: convertDate(birthday),
      phone,
      city,
    };
  }, [userFields]);

  const _handleSubmit = async values => {
    try {
      const userData = Object.keys(values).reduce(
        (acc, key) =>
          values[key] && values[key] !== info[key]
            ? { ...acc, [key]: values[key] }
            : acc,
        {}
      );
      if (Object.keys(userData).length) 
        await updateUser(userData).unwrap();
    } catch (error) {
       Notify.error(error, {
        pauseOnHover: true,
        fontSize: '16px',
        timeout: 5000,
      });
    }
  };

  const formik = useFormik({
    initialValues: { ...info },
    enableReinitialize: true,

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
          {Object.entries(formik.initialValues).map((item) => {
            const [name] = item
            return (
            <UserDataItem
              key={item}
              label={t(getLabel(name))}
              name = {name}
              type={getInputType(name)}
              formik={formik}
            />)
            })}
          <LogoutButton />
        </UserDataItemsBox>
      </UserDataBox>
    </DataBox>
  );
};

export default UserData;
