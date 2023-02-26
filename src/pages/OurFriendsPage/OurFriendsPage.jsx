import { Container } from 'styles/Container/Container.styled';
import { OurFriendsList } from '../../components/OurFriensList/OurFriendsList';
import { FirstHeader } from '../../styles/Headers/Headers.styled';
import { FriendsWrap } from './OurFriendsWrapStyled';
import { useTranslation } from 'react-i18next';
const OurFriendsPage = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <FriendsWrap>
        <FirstHeader>{t('friendsTitle')}</FirstHeader>
        <OurFriendsList />
      </FriendsWrap>
    </Container>
  );
};

export default OurFriendsPage;
