import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: action.payload,
      };

    case SET_CURRENT:
      return {
        ...state,
        currentContact: action.payload,
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        currentContact: action.payload,
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: action.payload,
      };

    case FILTER_CONTACTS:
      return {
        ...state,
        filteredContacts: action.payload,
      };

    case CLEAR_FILTER:
      return {
        ...state,
        filteredContacts: action.payload,
      };

    default: return state;
  }
};
