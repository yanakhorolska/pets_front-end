import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <div>layout</div>
      <Outlet />
    </>
  );
};

export default SharedLayout;
