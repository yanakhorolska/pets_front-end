import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLogInUserMutation, useRegisterUserMutation } from 'redux/authApi';
import { setCredentials } from 'redux/authSlice';
import { AuthError, AuthErrorLast, AuthInput, AuthButton } from "../LoginForm/LoginFormStyled"
const RegisterForm = () => {
  const [page, setPage] = useState(1);
  const [registerUser] = useRegisterUserMutation();
  const [loginUser] = useLogInUserMutation();
  const dispatch = useDispatch();

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
        .required('This is a required field'),
      password: Yup.string()
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
        .matches(
          /[A-Za-zА-Яа-я]+/,
          'Please, enter only letters'
        )
        .required('This is a required field'),
      city: Yup.string()
        .matches(
          /[A-Za-z]+, [A-Za-z]+/,
          'Please, enter the data in format "region, city"'
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
        alert('Input all required fields');
        return;
      }
      if (passwordError || confirmError || emailError) {
        alert('Input all fields in the necessary format');
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
      alert('Input all required fields');
      return;
    }
    if (nameError || cityError || phoneError) {
      alert('Input all fields in the necessary format');
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
      const user = await loginUser({ email, password }).unwrap();
      dispatch(setCredentials(user));
    } catch (error) {
      alert(error.data.message);
    }
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        {page === 1 && (
          <>
            <AuthInput
              type="email"
              name="email"
              placeholder="Email"
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
              placeholder="Password"
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
              placeholder="Confirm Password"
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
              placeholder="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={name}
            />
            <AuthError>
              {formik.touched.name && nameError && nameError}
            </AuthError>
            <AuthInput
              type="text"
              name="city"
              placeholder="City"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={city}
            />
            <AuthError>
              {formik.touched.city && cityError && cityError}
            </AuthError>
            <AuthInput
              type="tel"
              name="phone"
              placeholder="Mobile phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={phone}
            />
            <AuthErrorLast>
              {formik.touched.phone && phoneError && phoneError}
            </AuthErrorLast>
            <AuthButton accent = {true} last={false}
              type="submit"
            >
              Register
            </AuthButton>
          </>
        )}
        <AuthButton accent={page === 1 ? true : false} last={true}
          type="button"
          onClick={onPageChange}
        >
          {page === 1 ? 'Next' : 'Back'}
        </AuthButton>
      </form>
    </>
  );
};

export default RegisterForm;
