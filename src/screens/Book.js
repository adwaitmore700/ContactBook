import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import ContactCard from '../components/ContactCard';

import Loader from '../components/Loader';
import {FlatList} from 'react-native';
import _ from 'lodash';

const Book = props => {
  const {contactList, showLoader} = useSelector(state => state.contacts);

  return (
    <View style={styles.container}>
      {showLoader ? (
        <View style={{...styles.container, flex: 1}}>
          <Loader />
        </View>
      ) : (
        <FlatList
          data={contactList}
          keyExtractor={rs => rs.id}
          initialNumToRender={30}
          renderItem={itemData => (
            <ContactCard
              {...props}
              key={`${itemData.item.id}`}
              childKey={`${itemData.item.id}`}
              info={itemData.item}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.listEmptyContainer}>
              {<Text style={styles.listEmptyContainerText}>No contacts</Text>}
            </View>
          )}></FlatList>
      )}
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#83C5BE',
  },
  listEmptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
  },
  listEmptyContainerText: {
    color: '#888',
    fontSize: 16,
    textTransform: 'uppercase',
    width: '100%',
    textAlign: 'center',
  },
});
