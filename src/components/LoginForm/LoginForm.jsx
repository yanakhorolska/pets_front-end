import { useDispatch} from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLogInUserMutation } from 'redux/authApi';
import { setCredentials } from 'redux/authSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { AuthError, AuthErrorLast, AuthInput, AuthButton } from "../AuthForm/AuthFormStyled"

const LoginForm = () => {
  const [loginUser] = useLogInUserMutation();
  const dispatch = useDispatch();

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
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Invalid email address'
      )
        .min(10, 'Email must include more tnan 10 characters')
        .max(63, 'Email must be less tnan 63 characters')
        .required('This is a required field'),
      password: Yup.string()
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
      const user = await loginUser({ email, password }).unwrap();
      dispatch(setCredentials(user));
    } catch (error) {
      Notify.failure(error.data.message);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
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
      <AuthErrorLast>
        {formik.touched.password && passwordError && passwordError}
      </AuthErrorLast>
      <AuthButton type="submit" accent={true} last={true}>
        Login
        </AuthButton>
      </form>
  );
};

export default LoginForm;
