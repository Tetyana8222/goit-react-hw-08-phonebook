import {
  StyledHeader,
  HeaderNav,
  HomeDiv,
  StyledNavLink,
} from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <HeaderNav>
        <HomeDiv>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>
        </HomeDiv>
        <div>
          <StyledNavLink to="/register">Registration</StyledNavLink>
          <StyledNavLink to="/login">Login</StyledNavLink>
        </div>
      </HeaderNav>
    </StyledHeader>
  );
};

export default Header;
