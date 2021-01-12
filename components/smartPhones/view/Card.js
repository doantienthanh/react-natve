import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
const Card = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageCard}>
        <Image
          source={{
            uri: props.imagePro,
          }}
          style={styles.imageProduct}
        />
      </View>
      <View style={styles.descritionCard}>
        <Text style={styles.nameProduct}>{props.name}</Text>
        <Text style={styles.priceProducts}>{props.price} VND</Text>
        <Text style={styles.txtDescription}>{props.description}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 140,
    flexDirection: 'row',
    backgroundColor: '#dcdcdc',
    borderBottomColor: 'white',
    borderEndWidth: 1,
  },
  imageCard: {
    width: '35%',
    height: '100%',
  },
  imageProduct: {
    width: '100%',
    height: '100%',
  },
  descritionCard: {
    marginTop: 5,
    width: '60%',
    height: '100%',
  },
  nameProduct: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  priceProducts: {
    fontSize: 13,
    color: 'red',
    marginTop: 5,
  },
  txtDescription: {
    fontSize: 14,
    marginTop: 5,
  },
});
export default Card;
