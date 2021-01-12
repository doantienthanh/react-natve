import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const NumberButton = (props) => {
  return (
    <TouchableOpacity style={styles.btnPlus} onPress={() => props.handle()}>
      <Text style={styles.text1}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnPlus: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    backgroundColor: 'white',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#BA6F6F',
  },
  text1: {
    fontFamily: 'vincHand',
    fontSize: 30,
    color: 'black',
    textAlign: 'right',
    marginRight: 10,
  },
});

export default NumberButton;
