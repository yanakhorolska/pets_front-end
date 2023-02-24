import React from 'react';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import AddButton from 'components/AddButton';
import CreateNotice from 'components/ModalAddNotice/CreateNotice';

// import { Outlet } from 'react-router-dom/dist';

const NoticesPage = () => {
  return (
    <>
      <div>
        <h1>Find your favorite pet</h1>
        <NoticesSearch />

        <div>
          <NoticesCategoriesNav />
          <AddButton component={CreateNotice} />
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
