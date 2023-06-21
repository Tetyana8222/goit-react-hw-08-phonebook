import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  padding-right: 10px;
  padding-left: 10px;
  display: flex;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 10px;
  text-transform: uppercase;
  color: #000;
  border: solid 3px darkslategrey;
  border-radius: 8px;
  padding: 6px 10px;
  &:hover {
    transform: scale(1.2);
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
