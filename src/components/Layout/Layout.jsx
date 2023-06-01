import { Outlet } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

import { Header } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
