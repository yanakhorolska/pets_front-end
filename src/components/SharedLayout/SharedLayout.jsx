import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { Layout } from './SharedLayout.styled';
import { Container } from 'styles/Container/Container.styled';

const SharedLayout = () => {
  return (
    <Layout>
      <Container>
        <Header />
      </Container>
      <Suspense fallback={<></>}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};

export default SharedLayout;
