import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { useSelector } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import Menu from './ToolsBar';
import Card from './Card';
import Demo from './Demo';

const Home = (props) => {
  const [image] = useState([
    'https://hoanghamobile.com/preview/Uploads/2020/11/06/iphone-12-pro-max.png',
    'https://www.gizmochina.com/wp-content/uploads/2020/10/aaaa-500x500.jpg',
    'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/6/3/637060410960077373_xiaomi-redmi-note-8-xanh-1.png',
  ]);
  const products = useSelector((state) => state.products);
  return (
    <View style={styles.container}>
      <Menu />
      <View style={styles.slider}>
        <SliderBox
          images={image}
          onCurrentImagePressed={(index) => console.warn(`image ${index} pressed`)}
        />
      </View>
      <View style={styles.newProducts}>
        <Text style={styles.txtNewProducts}>Sản phẩm mới nhất</Text>
        <View style={styles.listProducts}>
          <ScrollView style={styles.showProducts}>
            {products.map((element) => (
              <TouchableOpacity
                key={element.id}
                onPress={() =>
                  Navigation.push(props.componentId, {
                    component: {
                      name: 'detailProducts',
                      passProps: {
                        nameEvent: element,
                      },
                    },
                  })
                }
              >
                <Card
                  key={element.id}
                  name={element.name}
                  imagePro={element.imageUrl}
                  price={element.price}
                  description={element.description}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

Navigation.re('detailProducts', () => Demo);
const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 500,
  },
  slider: {
    marginTop: 20,
    marginBottom: 20,
  },
  newProducts: {
    width: '100%',
    height: '100%',
  },
  txtNewProducts: {
    marginLeft: 20,
    fontSize: 20,
    color: 'red',
    fontFamily: 'bold',
  },
  showProducts: {
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 100,
  },
});

export default Home;
