import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px;

  background: #add2bb;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.23), 0px 1px 1px rgba(0, 0, 0, 0.24),
    0px 2px 1px rgba(0, 0, 0, 0.5);
`;

export const HeaderNav = styled.nav`
  padding-right: 10px;
  padding-left: 10px;
  display: flex;
`;

export const HomeDiv = styled.div`
  margin-right: 100px;
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
