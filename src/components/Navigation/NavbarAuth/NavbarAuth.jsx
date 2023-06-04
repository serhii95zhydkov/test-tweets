import { NavbarAuthLink, NavbarAuthContainer } from './NavbarAuth.styled';

const NavbarAuth = () => {
  return (
    <NavbarAuthContainer>
      <NavbarAuthLink to="/">HOME</NavbarAuthLink>
      <NavbarAuthLink to="/tweets">TWEETS</NavbarAuthLink>
    </NavbarAuthContainer>
  );
};

export default NavbarAuth;
