import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 100,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF00',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
