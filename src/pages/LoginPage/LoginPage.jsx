import AuthForm from 'components/AuthForm/AuthForm';
// import s from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <div
      // className={s.container}
    >
      <AuthForm
        title="Login"
      />
    </div>
  );
};

export default LoginPage;

// import { useLogInUserMutation } from 'redux/authApi';
// import { useDispatch } from 'react-redux';
// import { setUser } from 'redux/authSlice';

// const LoginPage = () => {
//   // const [logInUser, { status }] = useLogInUserMutation();
//   const [logInUser] = useLogInUserMutation();
//   const dispatch = useDispatch();

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const values = {
//       email: form.elements.email.value,
//       password: form.elements.password.value,
//     };
//     const user = await logInUser(values).unwrap();
//     dispatch(setUser(user));
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input name="email" type="email" placeholder="email" />
//         <input name="password" type="password" placeholder="password" />
//         <button type="submit">login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
