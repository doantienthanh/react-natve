import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Toolsbar = () => {
  return (
    <Appbar style={styles.toolbar}>
      <Icon
        name="align-justify"
        style={styles.icon}
        onPress={() => {
          alert('thanh');
        }}
      />
      <Appbar.Action icon="mail" />
      <Appbar.Action icon="label" />
      <Appbar.Action icon="delete" />
    </Appbar>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    width: 500,
    height: 50,
    backgroundColor: '#696969',
  },
  icon: {
    marginLeft: 5,
    color: 'white',
    fontSize: 25,
  },
});
export default Toolsbar;
