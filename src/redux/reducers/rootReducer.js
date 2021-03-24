/*
  All reducers combined together in this file
*/

import {combineReducers} from 'redux';
import contactsReducer from './contactsReducer';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
});
