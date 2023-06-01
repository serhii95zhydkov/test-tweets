import { NavbarAuthLink, NavbarAuthContainer } from './NavbarAuth.styled';

const NavbarAuth = () => {
  return (
    <NavbarAuthContainer>
      <NavbarAuthLink to="/">Home</NavbarAuthLink>
      <NavbarAuthLink to="/tweets">Tweets</NavbarAuthLink>
    </NavbarAuthContainer>
  );
};

export default NavbarAuth;
