import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { defaultColors } from '../../elements/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Navigation } from 'react-native-navigation';
import ToolBar from '../components/ToolBar';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import * as loginActions from '../redux/Auth/Login/Action';
import { useDispatch } from 'react-redux';

const Login = (props) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const onLogin = () => {
    const data = {
      email: email,
      password: password,
    };
    return data;
  };
  const dispatch = useDispatch();
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
          onChangeText={(text) => setemail(text)}
        />
        <View style={styles.txtIconEyes}>
          <TextInput
            style={styles.txtPassword}
            textContentType="password"
            placeholder="Your password"
            onChangeText={(text) => setpassword(text)}
          />
          <Icon name="eye-slash" style={styles.iconEye} />
          <View style={styles.bottomLogin}>
            <TouchableOpacity
              style={styles.btnLogin}
              onPress={() => {
                dispatch(loginActions.login(onLogin()));
                // action  
              }}
            >
              <Text style={styles.txtLogin}>Login</Text>
            </TouchableOpacity>
            <View style={styles.bottomForgot}>
              <TouchableOpacity
                style={styles.btnSignUp}
                onPress={() =>
                  Navigation.push(props.componentId, {
                    component: {
                      name: 'Register',
                    },
                  })
                }
              >
                <Text style={styles.txtSignUp}>SIGN UP NOW</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnForgot}
                onPress={() =>
                  Navigation.push(props.componentId, {
                    component: {
                      name: 'ForgotPassword',
                    },
                  })
                }
              >
                <Text style={styles.txtForgot}>FORGOT PASSWORD</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
Navigation.registerComponent('Register', () => Register);
Navigation.registerComponent('ForgotPassword', () => ForgotPassword);
Navigation.registerComponent('Login', () => Login);

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
    height: '35%',
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
    marginLeft: 30,
  },
  txtEmail: {
    height: 40,
    width: 250,
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: defaultColors.red,
  },
  txtPassword: {
    position: 'absolute',
    marginTop: 20,
    height: 40,
    width: 250,
    borderBottomWidth: 1,
    borderColor: defaultColors.red,
  },
  iconEye: {
    marginTop: 28,
    fontSize: 25,
    marginLeft: '76%',
  },
  bottomLogin: {
    marginTop: 60,
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
  },
  btnLogin: {
    width: '90%',
    backgroundColor: defaultColors.aqua,
    height: 50,
    marginLeft: 0,
    borderRadius: 25,
    justifyContent: 'center',
    marginTop: 30,
  },
  txtLogin: {
    fontSize: 21,
    textAlign: 'center',
  },
  bottomForgot: {
    flexDirection: 'row',
    marginTop: 90,
    left: 0,
  },
  txtForgot: {
    fontSize: 13,
  },
  txtSignUp: {
    fontSize: 13,
    marginRight: 50,
  },
});

export default Login;
