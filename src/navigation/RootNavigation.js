import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Book from '../screens/Book';
import BookDetails from '../screens/Details';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'} headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Book" component={Book} />
      <Stack.Screen name="BookDetails" component={BookDetails} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
