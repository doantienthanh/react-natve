import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Event = (props) => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={{
          uri: props.image,
        }}
        style={styles.image}
      />
      <Text style={styles.textItem}>{props.date}</Text>
      <Text style={styles.texttile}>{props.title}</Text>
      <Text style={styles.textandress}>{props.address}</Text>
    </View>
  );
};

export default Event;
const styles = StyleSheet.create({
  textItem: {
    color: '#ff0000',
    marginTop: 10,
    marginLeft: 30,
  },
  textandress: {
    fontSize: 13,
    color: '#a9a9a9',
    marginLeft: 30,
  },
  image: {
    marginTop: 30,
    width: 300,
    height: 150,
    borderRadius: 10,
    marginLeft: 30,
  },
  texttile: {
    fontSize: 20,
    marginLeft: 30,
  },
});
