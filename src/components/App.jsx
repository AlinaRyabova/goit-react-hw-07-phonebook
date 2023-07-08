import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { fetchAll } from '../redux/operations';
import { selectContact } from '../redux/selectors';

const App = () => {
  const contacts = useSelector(selectContact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={contacts} />
    </>
  );
};

export default App;
