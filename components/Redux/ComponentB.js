import React from 'react';
import { View, StyleSheet } from 'react-native';
import C from './ComponentC';
const ComponentB = () => {
  return (
    <View style={styles.container}>
      <C />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 160,
    borderWidth: 20,
    borderColor: '#00ffff',
  },
});
export default ComponentB;
