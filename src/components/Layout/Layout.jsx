import { Outlet } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import Footer from 'components/Footer/Footer';

import { StyledHeader, StyledFooter } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Navigation />
      </StyledHeader>
      <main>
        <Outlet />
      </main>
      <StyledFooter>
        <Footer />
      </StyledFooter>
    </>
  );
};

export default Layout;
