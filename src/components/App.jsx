import { Routes, Route } from 'react-router-dom';
// import AppBar from './AppBar/AppBar';
import SharedLayout from './SharedLayout/SharedLayout';
import HomeView from '../pages/HomeView';
import RegisterView from 'pages/RegisterView';
import LoginView from 'pages/LoginView';
import ContactsView from 'pages/ContactsView';
import authOperations from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomeView />} />
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="contacts" element={<ContactsView />} />
        </Route>
      </Routes>
    </>
  );
};
