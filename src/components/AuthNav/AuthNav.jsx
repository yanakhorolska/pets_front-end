import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { RoundLink, AuthBox } from './authNav.styled';

const AuthNav = () => {
  const { t } = useTranslation();
  return (
    <AuthBox>
      <RoundLink
        style={{ color: '#FFFFFF', background: '#F59256' }}
        to="/login"
      >
        {t('login')}
      </RoundLink>
      <RoundLink to="/register">
        {t('registration')}
      </RoundLink>
    </AuthBox>
  );
};
export default AuthNav;
