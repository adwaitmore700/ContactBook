import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useDispatch } from 'react-redux';
import {fetchAllContacts} from '../redux/actions/contactsActions';

const Home = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          props.navigation.push('Book');
        }}>
        <Text style={styles.buttonText}>Open Contacts</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDF6F9',
  },
  buttonContainer: {
    backgroundColor: '#83C5BE',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: '#006D77',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
  },
});
