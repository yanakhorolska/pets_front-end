import React from 'react';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import AddButton from 'components/AddButton';
import CreateNotice from 'components/ModalAddNotice/CreateNotice';
import { useAuth } from 'hooks/useAuth';
import { FirstHeader } from 'styles/Headers/Headers.styled';
import { Container } from 'styles/Container/Container.styled';
import { NoticesBox, NavBox, ListBox } from './NoticesPage.styled';


// import { Outlet } from 'react-router-dom/dist';

const NoticesPage = () => {
  return (
    <Container>
      <NoticesBox>
        <FirstHeader>Find your favorite pet</FirstHeader>
        <NoticesSearch />

        <NavBox>
          <NoticesCategoriesNav />
          <AddButton isVisible={isLoggedIn} component={CreateNotice} />
        </NavBox>


        <ListBox>
          <NoticesCategoriesList />
        </ListBox>

        {/* <Outlet /> */}
      </NoticesBox>
    </Container>
  );
};

export default NoticesPage;
