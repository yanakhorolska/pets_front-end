import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLogInUserMutation, useRegistrationUserMutation } from 'redux/fetchUser';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  AuthError,
  AuthErrorLast,
  AuthInput,
  AuthButton,
} from '../AuthForm/AuthFormStyled';
import { useTranslation } from 'react-i18next';

const RegisterForm = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [registerUser] = useRegistrationUserMutation();
  const [loginUser] = useLogInUserMutation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirm_password: '',
      name: '',
      city: '',
      phone: '',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .matches(
          /^([a-zA-Z0-9])+([a-zA-Z0-9._-]+)@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)\.[a-zA-Z]{2,}$/,
          'Invalid email address'
        )
        .min(10, 'Email must include more tnan 10 characters')
        .max(63, 'Email must be less tnan 63 characters')
        .required('This is a required field'),
      password: Yup.string()
        .matches(/^[^\s]+(^\s.*)?$/, "Password can't include whitespace")
        .min(7, 'Password must include more tnan 7 characters')
        .max(32, 'Password must be less tnan 32 characters')
        .required('This is a required field'),
      confirm_password: Yup.string()
        .oneOf(
          [Yup.ref('password'), null],
          "Password and confirm password don't match"
        )
        .required('This is a required field'),
      name: Yup.string()
        .max(70, 'Name must be less tnan 70 characters')
        .matches(/^[a-zA-Z]+$/, 'Only latin letters')
        .required('This is a required field'),
      city: Yup.string()
        .matches(
          /[A-Za-z]+, [A-Za-z]+/,
          'Please, enter the data in format "region, city" (only latin letters)'
        )
        .required('This is a required field'),
      phone: Yup.string()
        .matches(
          /^\+380\d{9}/,
          'Please, enter the phone number in the following way: +380XXXXXXXXX'
        )
        .length(13, 'Phone must include 13 characters')
        .required('This is a required field'),
    }),
  });

  let { email, password, confirm_password, name, city, phone } = formik.values;
  const {
    email: emailError,
    password: passwordError,
    confirm_password: confirmError,
    name: nameError,
    city: cityError,
    phone: phoneError,
  } = formik.errors;

  const onPageChange = async () => {
    if (page === 1) {
      if (email === '' || password === '' || confirm_password === '') {
        Notify.warning('Input all required fields');
        return;
      }
      if (passwordError || confirmError || emailError) {
        Notify.warning('Input all fields in the necessary format');
        return;
      }
      setPage(2);
      return;
    }
    setPage(1);
  };

  const onFormSubmit = async e => {
    e.preventDefault();
    if (name === '' || city === '' || phone === '') {
      Notify.warning('Input all required fields');
      return;
    }
    if (nameError || cityError || phoneError) {
      Notify.warning('Input all fields in the necessary format');
      return;
    }

    try {
      await registerUser({
        email,
        password,
        name,
        city,
        phone,
      }).unwrap();
      await loginUser({ email, password }).unwrap();
      
    } catch (error) {
      Notify.failure(error.data.message);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      {page === 1 && (
        <>
          <AuthInput
            type="email"
            name="email"
            placeholder={t('email')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={email}
          />
          <AuthError>
            {formik.touched.email && emailError && emailError}
          </AuthError>
          <AuthInput
            type="password"
            name="password"
            placeholder={t('password')}
            onChange={event => {
              formik.setFieldValue('password', event.target.value.trim());
            }}
            onBlur={formik.handleBlur}
            value={password}
          />
          <AuthError>
            {formik.touched.password && passwordError && passwordError}
          </AuthError>
          <AuthInput
            type="password"
            name="confirm_password"
            placeholder={t('confirmPassword')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={confirm_password}
          />
          <AuthErrorLast>
            {formik.touched.confirm_password && confirmError && confirmError}
          </AuthErrorLast>
        </>
      )}
      {page === 2 && (
        <>
          <AuthInput
            type="text"
            name="name"
            placeholder={t('name')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={name}
          />
          <AuthError>{formik.touched.name && nameError && nameError}</AuthError>
          <AuthInput
            type="text"
            name="city"
            placeholder={t('city')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={city}
          />
          <AuthError>{formik.touched.city && cityError && cityError}</AuthError>
          <AuthInput
            type="tel"
            name="phone"
            placeholder={t('mobilePhone')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={phone}
          />
          <AuthErrorLast>
            {formik.touched.phone && phoneError && phoneError}
          </AuthErrorLast>
          <AuthButton accent={true} last={false} type="submit">
            {t('register')}
          </AuthButton>
        </>
      )}
      <AuthButton
        accent={page === 1 ? true : false}
        last={true}
        type="button"
        onClick={onPageChange}
      >
        {page === 1 ? t('next') : t('back')}
      </AuthButton>
    </form>
  );
};

export default RegisterForm;
