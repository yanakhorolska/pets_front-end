import React from 'react';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import AddButton from 'components/AddButton';
import CreateNotice from 'components/ModalAddNotice/CreateNotice';
import { FirstHeader } from 'styles/Headers/Headers.styled';
import { Container } from 'styles/Container/Container.styled';
import { NoticesBox, NavBox } from './NoticesPage.styled';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const NoticesPage = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <NoticesBox>
        <FirstHeader>{t('noticesTitle')}</FirstHeader>
        <NoticesSearch />

        <NavBox>
          <NoticesCategoriesNav />

          <AddButton component={CreateNotice} />
        </NavBox>

        <Outlet />
      </NoticesBox>
    </Container>
  );
};

export default NoticesPage;
