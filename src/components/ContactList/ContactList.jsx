import { List, ContactCard, DeleteContactBtn } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/operations';
// import authOperations from 'redux/auth/auth-operations';
import * as selectors from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectors.getFilteredContacts);
  const error = useSelector(selectors.getError);
  const isLoading = useSelector(selectors.getisLoading);

  useEffect(() => {
    // dispatch(authOperations.refreshCurrentUser());
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <b>Loading contacts...</b>}
      {filteredContacts.length === 0 && !error && !isLoading ? (
        <p>Sorry, but no contact found.</p>
      ) : null}
      {error && <p>{error}</p>}
      <List>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactCard key={id}>
              <p>{name}: </p>
              <p>{number}</p>
              <DeleteContactBtn
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </DeleteContactBtn>
            </ContactCard>
          );
        })}
      </List>
    </>
  );
};
