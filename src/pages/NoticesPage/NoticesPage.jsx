import React from 'react';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import AddButton from 'components/AddButton';
import CreateNotice from 'components/ModalAddNotice/CreateNotice';
import { FirstHeader } from 'styles/Headers/Headers.styled';
import { Container } from 'styles/Container/Container.styled';
import { NoticesBox, NavBox } from './NoticesPage.styled';
import { Outlet } from 'react-router-dom';

const NoticesPage = () => {
  return (
    <Container>
      <NoticesBox>
        <FirstHeader>Find your favorite pet</FirstHeader>
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
