import React from 'react';
import { StyledNavLink, AuthNavMenu } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthNavMenu>
      <StyledNavLink to="/register">Registration</StyledNavLink>
      <StyledNavLink to="/login">Login</StyledNavLink>
    </AuthNavMenu>
  );
};

export default AuthNav;
