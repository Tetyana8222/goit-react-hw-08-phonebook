import React from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import * as selectors from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

const ContactsView = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectors.getisLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Contacts</title>

      <ContactForm />
      <Filter />
      {/* <div>{isLoading && 'Request in progress...'}</div> */}
      <ContactList />
    </>
  );
};

export default ContactsView;
