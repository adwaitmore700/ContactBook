import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {setSelectedContact} from '../redux/actions/contactsActions';

const ContactCard = props => {
  const dispatch = useDispatch();
  const renderPhoneNumbers = numbers => {
    let view = [];
    numbers.forEach((value, key, map) => {
      view.push(
        <View key={`${value}${key}`} style={styles.phoneNumberContainer}>
          <Text style={styles.numberText}>{`${value}`}</Text>
          <Text style={styles.numberType}>{`${key.toUpperCase()}`}</Text>
        </View>,
      );
    });
    return view;
  };
  return (
    <TouchableOpacity
      key={`C${props.childKey}`}
      activeOpacity={0.9}
      style={styles.container}
      onPress={() => {
        dispatch(setSelectedContact(props.info));
        props.navigation.push('BookDetails');
      }}>
      <Avatar
        title={props.info.image}
        rounded
        size={50}
        containerStyle={styles.photo}
        source={{uri: props.info.image}}
      />
      <View>
        <Text style={styles.buttonText}>{props.info.name}</Text>
        <View>{renderPhoneNumbers(props.info.numbers)}</View>
      </View>
    </TouchableOpacity>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  container: {
    minHeight: 50,
    borderRadius: 3,
    backgroundColor: '#ffffffcc',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
    padding: 8,
    elevation:1
  },
  photo: {
    height: 50,
    width: 50,
    borderRadius: 50,
    resizeMode: 'cover',
    marginRight: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  numberText: {
    fontSize: 12,
    textTransform: 'uppercase',
    width: 100,
  },
  numberType: {
    fontSize: 10,
    fontWeight: 'bold',
    backgroundColor: '#FFDDD2',
    textTransform: 'uppercase',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: '#E29578',
  },
});
