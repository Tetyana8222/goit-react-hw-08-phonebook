import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import authSelectors from 'redux/auth/auth-selectors';

const ContactsView = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Contacts</title>

      <ContactForm />
      <Filter />
      {isLoggedIn && <ContactList />}
    </>
  );
};

export default ContactsView;
