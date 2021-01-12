import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const Password = (props) => {
  return (
    <View style={styles.textInput}>
      <Text>{props.title}</Text>
      <TextInput style={styles.inputText} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: 300,
    marginLeft: 30,
    marginTop: 15,
  },
  inputText: {
    borderWidth: 1,
    width: 300,
    borderColor: 'black',
    height: 40,
  },
});
export default Password;
