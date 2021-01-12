import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = (props) => {
  return (
    <TouchableOpacity style={styles.btnPlus} onPress={() => props.handle()}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnPlus: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    backgroundColor: '#BA6F6F',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
  },
  text: {
    fontFamily: 'vincHand',
    fontSize: 30,
    color: 'white',
    textAlign: 'right',
    marginRight: 10,
  },
});
export default Calculator;
