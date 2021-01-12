import React from 'react';
import { View, StyleSheet, Linking, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const IconSocial = (props) => {
  const condition = props.nameIcon === 'phone' || props.nameIcon === 'map-marker-alt';
  return (
    <View style={styles.row}>
      <TouchableOpacity
        onPress={() =>
          condition ? Linking.openURL(`tel:${props.title}`) : Linking.openURL(props.title)
        }
        style={styles.linksWeb}
      >
        <Icon name={props.nameIcon} color={props.colors} style={styles.iconSocial} />
        <Text style={condition ? styles.textLink1 : styles.textLink2}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  iconSocial: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
    marginLeft: 20,
  },
  row: {
    flexDirection: 'row',
  },
  linksWeb: {
    flexDirection: 'row',
  },
  textLink1: {
    color: 'white',
    marginTop: 6,
    marginLeft: 5,
  },
  textLink2: {
    color: 'black',
    marginTop: 6,
    marginLeft: 5,
  },
});

export default IconSocial;
