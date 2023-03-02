import UserAvatar from '../UserAvatar/UserAvatar';
import UserDataItem from 'components/UserDataItem/UserDataItem';
// import { getUser } from 'redux/selectors';
// import { useSelector } from 'react-redux';
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
import { useFormik, useField } from 'formik';
import { useUpdateUserMutation } from 'redux/fetchUser';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useUser } from 'hooks/useUser';

const UserData = () => {
  const { t } = useTranslation();
  const [updateUser] = useUpdateUserMutation(); 

  const userFields = useUser();

  //useEffect( console.log("update fields"), [userFields])

  const {
    name = '',
    email = '',
    birthday = '',
    phone = '',
    city = '',
  } = userFields;

  console.log("UserData", userFields, Date.now());

  const convertDate = dateString => {
    if (!dateString) return ""
    const date = new Date(dateString);
    // return [
    //   date.toLocaleString('default', { day: '2-digit' }),
    //   date.toLocaleString('default', { month: '2-digit' }),
    //   date.toLocaleString('default', { year: 'numeric' }),
    // ].join('.');
    return new Date(date.getFullYear, date.getMonth, date.getDay)
  };

  console.log(new Date(birthday));

  const info = {
    name,
    email,
    birthday: new Date(birthday),
    phone,
    city,
  };

  console.log("UserData info", info, Date.now());

  const _handleSubmit = async values => {
    try {
      const userData = Object.keys(values).reduce(
        (acc, key) => (values[key] ? { ...acc, [key]: values[key] } : acc),
        {}
      );
      await updateUser(userData).unwrap();
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

  // useField()

  return (
    <DataBox>
      <TitleWrapperData>
        <UserPageTitle title={t('myInfo')} />
      </TitleWrapperData>
      
      <div sx={{ display: "flex", flexdirrection:"column" }}>
        {Object.keys(userFields).map(key => <p>`userFields {key} = {userFields[key]}`</p>)}
      </div>

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
