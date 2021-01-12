import React from 'react';
import { View, TextInput, Text, StyleSheet, Image } from 'react-native';
import { defaultColors } from '../../elements/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import ToolBar from '../components/ToolBar';
const Login = () => {
  return (
    <View style={styles.bodyLogin}>
      <View style={styles.toolbar}>
        <ToolBar />
      </View>
      <View style={styles.imageLogin}>
        <Image
          source={{
            uri: 'https://www.nicepng.com/png/full/138-1388174_login-account-icon.png',
          }}
          style={styles.iconLogin}
        />
      </View>
      <View style={styles.contentLogin}>
        <TextInput
          style={styles.txtEmail}
          placeholder="Your email"
          textContentType="emailAddress"
        />
        <View style={styles.txtIconEyes}>
          <TextInput
            style={styles.txtPassword}
            textContentType="password"
            placeholder="Your password"
          />
          <Icon name="eye-slash" style={styles.iconEye} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  bodyLogin: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: defaultColors.wheat,
  },
  toolbar: {
    width: '100%',
  },
  imageLogin: {
    width: '100%',
    justifyContent: 'center',
  },
  iconLogin: {
    textAlign: 'center',
    width: 150,
    height: 150,
    justifyContent: 'center',
    marginLeft: '32%',
    marginTop: 50,
  },
  contentLogin: {
    marginTop: 20,
  },
  txtEmail: {
    height: 40,
    width: 250,
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: defaultColors.red,
  },
  txtPassword: {
    marginTop: 20,
    height: 40,
    width: 250,
    borderBottomWidth: 1,
    borderColor: defaultColors.red,
  },
  txtIconEyes: {
    flexDirection: 'row',
  },
  iconEye: {
    marginTop: 28,
    fontSize: 25,
  },
});

export default Login;
