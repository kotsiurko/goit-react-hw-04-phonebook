import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Container } from './App.styled';
import { useState, useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filterQuery, setFilterQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmit = (name, number) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    const isInclude = contacts.some(contact => name === contact.name);

    if (isInclude) {
      alert(`${contact.name} is already in your contact list`);
      return;
    } else {
      setContacts([contact, ...contacts]);
    }
  };

  const changeFilter = event => {
    setFilterQuery(event.currentTarget.value);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contactItem => contactItem.id !== id));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterQuery.toLowerCase())
    );
  };

  const visibleItems = getFilteredContacts();

  return (
    <Container>
      <h1>Phonebook App</h1>
      <ContactForm onSubmit={onSubmit} />
      {contacts.length > 0 ? (
        <Filter filterValue={filterQuery} onChange={changeFilter} />
      ) : null}
      {visibleItems.length > 0 ? (
        <ContactList contacts={visibleItems} deleteContact={deleteContact} />
      ) : (
        <p>Your contact list is empty</p>
      )}
    </Container>
  );
};
