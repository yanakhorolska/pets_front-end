import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { RoundLink } from './authNav.styled';

const AuthNav = click => {
  const { t } = useTranslation();
  return (
    <>
      <RoundLink
        
        style={{ color: '#FFFFFF', background: '#F59256' }}
        to="/login"
      >
        {t('login')}
      </RoundLink>
      <RoundLink to="/register">
        {t('registration')}
      </RoundLink>
    </>
  );
};
export default AuthNav;
