/*
  Contact reducer declared in this file
*/

import {ACTIONS} from '../reduxConstants';

const initialState = {
  contactList: [],
  selectedContact: null,
  showLoader: false,
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_CONTACTS_LIST:
      return {
        ...state,
        contactList: action.data,
      };
    case ACTIONS.SET_SELECTED_CONTACT:
      return {
        ...state,
        selectedContact: action.data,
      };
    case ACTIONS.TOGGLE_LOADER:
      return {
        ...state,
        showLoader: action.data,
      };
    default:
      return state;
  }
};

export default contactsReducer;
