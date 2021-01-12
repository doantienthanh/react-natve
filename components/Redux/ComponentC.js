import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';

const ComponentC = () => {
  const store = useSelector((state) => state.value);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{store}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    backgroundColor: '#000000',
  },
  text: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    justifyContent: 'center',
    lineHeight: 110,
  },
});

export default ComponentC;
