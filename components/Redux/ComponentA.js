import React from 'react';
import { View, StyleSheet } from 'react-native';
import B from './ComponentB';
const ComponentA = () => {
  return (
    <View style={styles.container}>
      <B />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    borderWidth: 20,
    borderColor: 'red',
    alignItems: 'center',
    marginLeft: '40%',
    marginTop: 20,
  },
});
export default ComponentA;
