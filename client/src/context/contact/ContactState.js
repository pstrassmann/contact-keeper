import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Dingus McClingus',
        email: 'DingMcCling@gmail.com',
        phone: '123-123-1233',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Butt McHole',
        email: 'bm@gmail.com',
        phone: '123-123-1233',
        type: 'professional',
      },
      {
        id: 3,
        name: 'Schlerm Mclerm',
        email: 'suqMclerm@gmail.com',
        phone: '123-123-1233',
        type: 'personal',
      },
    ],
    currentContact: null,
    filteredContacts: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = (contact) => {
    const contactMod = { ...contact };
    contactMod.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contactMod });
  };

  // Delete contact
  const deleteContact = (id) => {
    const contacts = state.contacts.filter((contact) => id !== contact.id);
    dispatch({ type: DELETE_CONTACT, payload: contacts });
  };
  // Set current contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  // Clear current contact
  const clearCurrent = () => {
    dispatch({ type: SET_CURRENT, payload: null });
  };
  // Update contact
  const updateContact = (updatedContact) => {
    const contacts = state.contacts.map((contact) => {
      if (contact.id === updatedContact.id) {
        contact = updatedContact;
      }
      return contact;
    });
    dispatch({ type: UPDATE_CONTACT, payload: contacts });
  };
  // Filter contacts
  const filterContacts = (text) => {
    const filteredContacts = state.contacts.filter((contact) => {
      const regex = new RegExp(`${text}`, 'gi');
      return contact.name.match(regex) || contact.email.match(regex);
    });
    dispatch({ type: FILTER_CONTACTS, payload: filteredContacts});
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER, payload: null });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        currentContact: state.currentContact,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
