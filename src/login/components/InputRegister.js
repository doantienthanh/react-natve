import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
const InputRegister = () => {
  return (
    <View style={styles.itemTxtFirstName}>
      <TextInput
        style={styles.textFirstName}
        placeholder="First Name"
        onChangeText={(text) => setfirst_name(text)}
        defaultValue={first_name}
      />
    </View>
  );
};

        export default InputRegister;