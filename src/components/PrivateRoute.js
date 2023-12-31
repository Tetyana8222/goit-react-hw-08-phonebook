import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const shouldRedirect = !isRefreshing && !isLoggedIn;

  return !isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;
