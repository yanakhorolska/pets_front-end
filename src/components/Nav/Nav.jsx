import { List, Link } from './nav.styled';
import { useTranslation } from 'react-i18next';

const Nav = ({display}) => {
  const { t } = useTranslation();
  return (
    <List display={display}>
      <Link to="/news">{t('titleNews')}</Link>
      <Link to="/notices">{t('noticesHeaderTitle')}</Link>
      <Link to="/friends">{t('friendsTitle')}</Link>
    </List>
  );
};

export default Nav;
