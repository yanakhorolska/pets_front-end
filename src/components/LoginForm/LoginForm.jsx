import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLogInUserMutation } from 'redux/fetchUser';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  AuthError,
  AuthErrorLast,
  AuthInput,
  AuthButton,
} from '../AuthForm/AuthFormStyled';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
  const { t } = useTranslation();
  const [loginUser] = useLogInUserMutation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
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
    }),
  });

  const { email, password } = formik.values;
  const { email: emailError, password: passwordError } = formik.errors;

  const onFormSubmit = async e => {
    e.preventDefault();

    if (email === '' || password === '') {
      Notify.warning('Input all required fields');
      return;
    }
    if (passwordError || emailError) {
      Notify.warning('Input all fields in the necessary format');
      return;
    }

    try {
      await loginUser({ email, password }).unwrap();
    } catch (error) {
      Notify.failure(error.data.message);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <AuthInput
        type="email"
        name="email"
        placeholder={t('email')}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={email}
      />
      <AuthError>{formik.touched.email && emailError && emailError}</AuthError>
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
      <AuthErrorLast>
        {formik.touched.password && passwordError && passwordError}
      </AuthErrorLast>
      <AuthButton type="submit" accent={true} last={true}>
        {t('login')}
      </AuthButton>
    </form>
  );
};

export default LoginForm;
