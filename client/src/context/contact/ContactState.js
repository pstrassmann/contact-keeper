import React, { useReducer } from 'react';
import uuid from 'uuid';
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
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact

  // Delete contact

  // Set current contact

  // Clear current contact

  // Update contact

  // Filter contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
