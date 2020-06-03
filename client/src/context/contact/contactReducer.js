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
      };

    case DELETE_CONTACT:
      return {
        ...state,
      };

    case SET_CURRENT:
      return {
        ...state,
      };

    case CLEAR_CURRENT:
      return {
        ...state,
      };

    case UPDATE_CONTACT:
      return {
        ...state,
      };

    case FILTER_CONTACTS:
      return {
        ...state,
      };

    case CLEAR_FILTER:
      return {
        ...state,
      };
  }
};
