import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { defaultColors } from '../../elements/Colors';
const ToolBar = () => {
  return (
    <Appbar style={styles.toolbar}>
      <Icon
        name="align-justify"
        style={styles.icon}
        onPress={() => {
          alert('thanh');
        }}
      />
    </Appbar>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    width: '100%',
    height: 50,
    backgroundColor: defaultColors.gray,
  },
  icon: {
    marginLeft: 5,
    color: defaultColors.white,
    fontSize: 25,
  },
});
export default ToolBar;
