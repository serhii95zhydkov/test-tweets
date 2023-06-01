import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavbarAuthContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const NavbarAuthLink = styled(NavLink)`
  display: inline-block;
  padding: 25px 20px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  color: #000;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active,
  &:hover,
  &:focus {
    color: #471CA9;
;
  }
`;

export { NavbarAuthLink, NavbarAuthContainer };
