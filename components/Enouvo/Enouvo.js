import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Data from './Data';
import Event from './Event';
import DetailEnouvo from './DetailEnouvo';
import { Navigation } from 'react-native-navigation';
const Enouvo = ({ componentId }) => {
  const [data] = useState(Data);
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}> Welcom To Enouvo</Text>
      <ScrollView style={styles.bodyEvent}>
        {data.map((element) => (
          <TouchableOpacity
            key={element.toString()}
            onPress={() =>
              Navigation.push(componentId, {
                component: {
                  name: 'enouvoComapny',
                  options: {
                    topBar: {
                      title: {
                        text: element.title,
                      },
                    },
                  },
                  passProps: {
                    nameEvent: element,
                  },
                },
              })
            }
          >
            <Event
              image={element.imageUrl}
              date={element.date.en}
              title={element.title}
              address={element.address.en}
              key={element.toString()}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

Navigation.registerComponent('enouvoComapny', () => DetailEnouvo);
export default Enouvo;
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 20,
  },
  bodyEvent: {
    marginBottom: 20,
  },
});
