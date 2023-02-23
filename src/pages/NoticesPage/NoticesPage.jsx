import React from 'react';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import AddButton from 'components/AddButton';
import CreateNotice from 'components/ModalAddNotice/CreateNotice';
import { useAuth } from 'hooks/useAuth';

// import { Outlet } from 'react-router-dom/dist';

const NoticesPage = () => {
  const isLoggedIn = useAuth();
  return (
    <>
      <div>
        <h1>Find your favorite pet</h1>
        <NoticesSearch />

        <div>
          <NoticesCategoriesNav />
          <AddButton isVisible={isLoggedIn} component={CreateNotice} />
        </div>

        <div>
          <NoticesCategoriesList />
        </div>

        {/* <Outlet /> */}
      </div>
    </>
  );
};

export default NoticesPage;
