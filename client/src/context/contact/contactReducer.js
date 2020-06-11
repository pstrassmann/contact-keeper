import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  LOAD_CONTACTS,
  FILTER_CONTACTS,
  CLEAR_FILTER, CLEAR_CONTACTS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
        loading: false,
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
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
        loading: false,
      };
    case LOAD_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };

    case CLEAR_CONTACTS:
      return {
        ...state,
        contacts: [],
        loading: false,
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
