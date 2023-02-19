import { Link, useLocation } from 'react-router-dom';
import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';
// import s from './AuthForm.module.scss';

const AuthForm = ({ title }) => {
  const { pathname } = useLocation();


  return (
    <div
      // className={s.container}
    >
      <h2
        // className={s.title}
      >{title}</h2>
      {pathname === '/login' && <LoginForm />}
      {pathname === '/register' && <RegisterForm />}
      <p
        // className={s.question}
      >
        {pathname === '/register'
          // ? t('registration.linkDescr')
          // : t('login.linkDescr')
        }
        &nbsp;
      </p>
      <Link
        to={pathname === '/register' ? '/login' : '/register'}
        // className={s.link}
      >
        {/* {pathname === '/register' ? t('registration.link') : t('login.link')} */}
      </Link>
    </div>
  );
};

export default AuthForm;