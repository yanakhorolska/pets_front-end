import React from 'react';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import AddButton from 'components/AddButton';
import CreateNotice from 'components/ModalAddNotice/CreateNotice';
import { FirstHeader } from 'styles/Headers/Headers.styled';
import { Container } from 'styles/Container/Container.styled';
import { NoticesBox, NavBox, ListBox } from './NoticesPage.styled';

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

        <ListBox>
          <NoticesCategoriesList />
        </ListBox>
      </NoticesBox>
    </Container>
  );
};

export default NoticesPage;
