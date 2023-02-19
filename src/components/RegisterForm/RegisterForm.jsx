import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLogInUserMutation, useRegisterUserMutation } from 'redux/authApi';
import { setCredentials } from 'redux/authSlice';
import { RegisterError, RegisterErrorLast } from './RegisterFormStyled';

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
        .min(5, 'Email must include more tnan 5 characters')
        .max(40, 'Email must be less tnan 40 characters')
        .required('This is a required field'),
      password: Yup.string()
        .min(6, 'Password must include more tnan 6 characters')
        .max(40, 'Password must be less tnan 40 characters')
        .required('This is a required field'),
      confirm_password: Yup.string()
        .oneOf(
          [Yup.ref('password'), null],
          "Password and confirm password don't match"
        )
        .required('This is a required field'),
      name: Yup.string()
        .min(2, 'Name must include more tnan 2 characters')
        .max(20, 'Name must be less tnan 20 characters')
        .required('This is a required field'),
      city: Yup.string()
        .min(2, 'City must include more tnan 2 characters')
        .max(30, 'City must be less tnan 30 characters')
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
            <input
              //   className={s.input}
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={email}
            />
            <RegisterError>
              {formik.touched.email && emailError && emailError}
            </RegisterError>
            <input
              //   className={s.input}
              type="password"
              name="password"
              placeholder="Password"
              onChange={event => {
                formik.setFieldValue('password', event.target.value.trim());
              }}
              onBlur={formik.handleBlur}
              value={password}
            />
            <RegisterError>
              {formik.touched.password && passwordError && passwordError}
            </RegisterError>
            <input
              //   className={s.input}
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={confirm_password}
            />
            <RegisterErrorLast>
              {formik.touched.confirm_password && confirmError && confirmError}
            </RegisterErrorLast>
          </>
        )}
        {page === 2 && (
          <>
            <input
              //   className={s.input}
              type="text"
              name="name"
              placeholder="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={name}
            />
            <RegisterError>
              {formik.touched.name && nameError && nameError}
            </RegisterError>
            <input
              //   className={s.input}
              type="text"
              name="city"
              placeholder="City"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={city}
            />
            <RegisterError>
              {formik.touched.city && cityError && cityError}
            </RegisterError>
            <input
              //   className={s.input}
              type="tel"
              name="phone"
              placeholder="Mobile phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={phone}
            />
            <RegisterErrorLast>
              {formik.touched.phone && phoneError && phoneError}
            </RegisterErrorLast>
            <button
              //   className={`${s.button} ${s.accent}`}
              type="submit"
            >
              Register
            </button>
          </>
        )}
        <button
          //   className={`${s['button--last']} ${page === 1 && s.accent}`}
          type="button"
          onClick={onPageChange}
        >
          {page === 1 ? 'Next' : 'Back'}
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
