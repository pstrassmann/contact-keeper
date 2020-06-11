import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  CONTACT_ERROR,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CLEAR_CONTACTS,
  SET_ALERT,
  REMOVE_ALERT, USER_LOADED, LOAD_CONTACTS,
} from '../types';
import setAuthToken from "../../utils/setAuthToken";

const ContactState = (props) => {
  const initialState = {
    contacts: null,
    currentContact: null,
    filteredContacts: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Get a user's contact
  const loadContacts = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      try {
        const res = await axios.get('/api/contacts');
        const contacts = res.data;
        dispatch({ type: LOAD_CONTACTS, payload: contacts });
      } catch (err) {
        console.error(err.response.data.msg);
      }
    }
  };

  const clearContacts = () => {
    dispatch({type: CLEAR_CONTACTS});
  }

  // Add contact
  const addContact = async (contact) => {
    try {
      const res = await axios.post('/api/contacts', contact);
      dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (err) {
      console.error(err.response.data.msg);
    }
  };

  // Delete contact
  const deleteContact = async (id) => {
    try {
      const res = await axios.delete(`/api/contacts/${id}`);
      const contacts = state.contacts.filter((contact) => id !== contact._id);
      dispatch({ type: DELETE_CONTACT, payload: contacts });
    } catch (err) {
      console.error(err.response.data.msg);
    }
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
  const updateContact = async (updatedContact) => {
    try {
      const res = await axios.put(`/api/contacts/${updatedContact._id}`, updatedContact);
      const contacts = state.contacts.map((contact) => {
        if (contact._id === res.data._id) {
          contact = res.data;
        }
        return contact;
      });
      dispatch({ type: UPDATE_CONTACT, payload: contacts });
    } catch (err) {
      console.error(err.response.data.msg);
    }
  };
  // Filter contacts
  const filterContacts = (text) => {
    const filteredContacts = state.contacts.filter((contact) => {
      const regex = new RegExp(`${text}`, 'gi');
      return contact.name.match(regex) || contact.email.match(regex);
    });
    dispatch({ type: FILTER_CONTACTS, payload: filteredContacts });
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
        filteredContacts: state.filteredContacts,
        addContact,
        loadContacts,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
        clearContacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
