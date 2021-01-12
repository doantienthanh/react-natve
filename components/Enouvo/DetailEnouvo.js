import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import Data from './Data';
import Socials from './IconSocial';
const DetailEnouvo = (props) => {
  const [data] = useState(Data);

  return (
    <ScrollView style={styles.body}>
      <View style={styles.container}>
        <Image
          source={{
            uri: props.nameEvent.imageUrl,
          }}
          style={styles.image}
        />
        <View style={styles.infoCompany}>
          <Text style={styles.textInforCompany}>ENOUVO IT SOLUTIONS</Text>
          <Socials nameIcon="map-marker-alt" colors="#ffffff" title="15 Ta My Duat-Da Nang" />
          <Socials nameIcon="phone" colors="#ffffff" title="(+84) 901 131 212" />
        </View>
      </View>
      <Text style={styles.textImage1}>IMAGE</Text>
      <View style={styles.viewImage}>
        <ScrollView horizontal={true} style={styles.rowImageEvent}>
          {data.map((element) => (
            <Image
              source={{
                uri: element.imageUrl,
              }}
              style={styles.imageInfo}
              key={element.toString()}
            />
          ))}
        </ScrollView>
      </View>
      <Text style={styles.textImage}>DESCRIPTION</Text>
      <Text style={styles.textDescription}>{props.nameEvent.subtitle.en}</Text>
      <Text style={styles.textImage}>SOCIAL</Text>
      <View style={styles.cicalConnet}>
        <Socials nameIcon="globe" colors="#ff0000" title="https://enouvo.com/" />
        <Socials nameIcon="facebook" colors="#1e90ff" title="https://www.facebook.com/enouvo/" />
        <Socials nameIcon="instagram" colors="#ee82ee" title="instagram.com/enouvo.it.solutions/" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    marginBottom: 20,
  },
  textInforCompany: {
    marginTop: 80,
    marginLeft: 20,
    fontSize: 30,
    color: 'white',
  },
  infoCompany: {
    marginTop: 100,
    marginLeft: 30,
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: 200,
  },
  textImage1: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 40,
    marginBottom: 10,
  },
  textImage: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  viewImage: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
  imageInfo: {
    height: 100,
    width: 140,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 5,
  },
  textDescription: {
    marginLeft: 20,
    color: '#696969',
  },
  infoCompany: {
    fontSize: 15,
  },
  rowImageEvent: {
    marginRight: 10,
  },
  cicalConnet: {
    display: 'flex',
  },
});

export default DetailEnouvo;
