import Contacts from 'react-native-contacts';
import lodash from 'lodash';

/*
  @list - contact list in raw format
  @returns formatted and sorted list
*/
export const flattenContacts = async list => {
  let flattenedList = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].phoneNumbers.length > 0) {
      let nos = new Map();
      list[i].phoneNumbers.forEach(element => {
        nos.set(element.label, element.number);
      });
      let uri = '';
      if (list[i].hasThumbnail) {
        try {
          uri = await Contacts.getPhotoForId(list[i].recordID);
        } catch (error) {
          //
        }
      }
      let obj = {
        id: list[i].recordID,
        name: `${list[i].givenName} ${list[i].familyName}`,
        image: uri ? uri : `${list[i].givenName[0]}`,
        numbers: nos,
      };
      flattenedList.push(obj);
    }
  }
  return lodash.sortBy(flattenedList, c => {
    return c.name;
  });
};
