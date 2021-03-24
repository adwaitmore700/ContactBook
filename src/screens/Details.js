import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import {useSelector} from 'react-redux';
import {Avatar} from 'react-native-elements';

const BookDetails = () => {
  const {selectedContact} = useSelector(state => state.contacts);

  const renderPhoneNumberView = numbers => {
    let view = [];
    numbers.forEach((value, key) => {
      view.push(
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            Linking.openURL(`tel:${value}`);
          }}
          key={`${value}${key}`}
          style={styles.phoneNumberContainer}>
          <Text style={styles.numberText}>{`${value}`}</Text>
          <Text style={styles.numberType}>{`${key.toUpperCase()}`}</Text>
        </TouchableOpacity>,
      );
    });
    return view;
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Avatar
          title={
            selectedContact?.image?.length > 1 ? '' : selectedContact?.image
          }
          rounded
          size={150}
          containerStyle={styles.photo}
          source={{uri: selectedContact?.image}}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.header}>Name</Text>
          <Text style={styles.value}>{selectedContact?.name}</Text>
        </View>
        <View style={{...styles.section, borderBottomWidth: 0}}>
          <Text style={styles.header}>Phone</Text>
          {renderPhoneNumberView(selectedContact?.numbers)}
        </View>
      </View>
    </View>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#83C5BE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    flex: 2,
    width: '95%',
    borderBottomColor: '#EDF6F9',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
  },
  photo: {
    height: 150,
    width: 150,
    borderRadius: 75,
    resizeMode: 'cover',
  },
  section: {
    width: '95%',
    borderBottomColor: '#EDF6F9',
    borderBottomWidth: 1,
  },
  header: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 16,
    paddingRight: 10,
    color: '#000',
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingLeft: 6,
  },
  phoneNumberContainer: {
    width: '98%',
    borderBottomColor: '#EDF6F9',
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingLeft: 6,
  },
  numberText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  numberType: {
    fontSize: 10,
    fontWeight: '100',
  },
});
