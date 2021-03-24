/*
  All redux actions related to contacts in this file
*/

import Contacts from 'react-native-contacts';
import {PermissionsAndroid} from 'react-native';
import {ACTIONS} from '../reduxConstants';
import {flattenContacts} from '../../utils/utilFunctions';
import {Alert} from 'react-native';

/*
  Action fetches all the contacts from Contacts API and passes to reducer
*/
export const fetchAllContacts = () => async dispatch => {
  dispatch(toggleLoader(true));
  try {
    let isGranted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    );
    if (isGranted) {
      let contacts = await Contacts.getAll();
      let fList = await flattenContacts(contacts);
      dispatch(storeAllContacts(fList));
    } else {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      );
      let contacts = await Contacts.getAll();
      let fList = await flattenContacts(contacts);
      dispatch(storeAllContacts(fList));
    }
  } catch (error) {
    Alert.alert('Error while fetching contacts');
  }
  dispatch(toggleLoader(false));
};

/*
  Dispatcher function to store all contacts to reducer
  @contactList - List of all the contacts
*/
const storeAllContacts = contactList => dispatch => {
  dispatch({
    type: ACTIONS.SET_CONTACTS_LIST,
    data: contactList,
  });
};

/*
  Dispatcher function to toggle the loader
  @flag - boolean flag
*/
const toggleLoader = flag => dispatch => {
  dispatch({
    type: ACTIONS.TOGGLE_LOADER,
    data: flag,
  });
};

/*
  Sets the selected contact to reducer
  @contact - selected contact detail object
*/
export const setSelectedContact = contact => dispatch => {
  try {
    if (contact) {
      dispatch({
        type: ACTIONS.SET_SELECTED_CONTACT,
        data: contact,
      });
    }
  } catch (error) {
    Alert.alert('Something went wrong');
  }
};
