import React from 'react';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import AddNoticeButton from 'components/AddNoticeButton/AddNoticeButton';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';

// import { Outlet } from 'react-router-dom/dist';

const NoticesPage = () => {
  return (
    <>
      <div>
        <h1>Find your favorite pet</h1>
        <NoticesSearch />

        <div>
          <NoticesCategoriesNav />
          <AddNoticeButton />
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
