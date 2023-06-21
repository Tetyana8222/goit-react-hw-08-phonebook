import { Nav, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/contacts">Contacts</StyledNavLink>
    </Nav>
  );
};

export default Navigation;
