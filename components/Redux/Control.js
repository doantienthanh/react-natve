import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import A from './ComponentA';
import { useDispatch } from 'react-redux';
import { addition, subtraction } from './Action';
const Control = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.btnHandle}>
        <TouchableOpacity style={styles.btnAdd} onPress={() => dispatch(addition())}>
          <Text style={styles.txtButton}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnAdd} onPress={() => dispatch(subtraction())}>
          <Text style={styles.txtButton}>-</Text>
        </TouchableOpacity>
      </View>
      <A />
    </View>
  );
};

export default Control;
const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
  },
  btnAdd: {
    width: 60,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00ffff',
    marginLeft: '40%',
    marginTop: 100,
    borderRadius: 5,
  },
  txtButton: {
    fontSize: 20,
    color: 'white',
  },
  btnHandle: {
    flexDirection: 'row',
    width: '100%',
  },
});
