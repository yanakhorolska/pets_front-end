import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const SharedLayout = () => {
  return (
        <>
          <Header />
          <Suspense fallback={<></>}>
            <Outlet />
          </Suspense>
        </>
  );
};

export default SharedLayout;
