import React from 'react';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import AddNoticeButton from 'components/AddNoticeButton/AddNoticeButton';
// import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav';
// import AddNoticeButton from 'components/Notices/AddNoticeButton';

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

        {/* <Outlet /> */}
      </div>
    </>
  );
};

export default NoticesPage;
