import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { defaultColors } from '../../elements/Colors';
import { font } from '../../elements/font';
import { Navigation } from 'react-native-navigation';
import Login from './Login';
import axios from 'axios';

const Register = (props) => {
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [phone, setphone] = useState('');
  const [birthday, setbirthday] = useState('');
  const register = () => {
    axios
      .post('https://proxibox-pharma-api-staging.enouvo.com/api/v1/auth/register', {
        firstName: first_name,
        lastName: last_name,
        email: email,
        password: password,
        phone: phone,
        birthDay: birthday,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.bodyRegister}>
        <View style={styles.topRegister}>
          <Text style={styles.titleSignUp}>SIGN UP</Text>
        </View>
        <View style={styles.centerRegister}>
          <View style={styles.itemTxtFirstName}>
            <TextInput
              style={styles.textFirstName}
              placeholder="First Name"
              onChangeText={(text) => setfirst_name(text)}
              defaultValue={first_name}
            />
          </View>
          <View style={styles.itemTxtFirstName}>
            <TextInput
              style={styles.textFirstName}
              placeholder="Last Name"
              onChangeText={(text) => setlast_name(text)}
              defaultValue={last_name}
            />
          </View>
          <View style={styles.itemTxtFirstName}>
            <TextInput
              style={styles.textFirstName}
              placeholder="Email"
              onChangeText={(text) => setemail(text)}
              defaultValue={email}
            />
          </View>
          <View style={styles.itemTxtFirstName}>
            <TextInput
              style={styles.textFirstName}
              placeholder="Password"
              onChangeText={(text) => setpassword(text)}
              defaultValue={password}
            />
          </View>
          <View style={styles.itemTxtFirstName}>
            <TextInput
              style={styles.textFirstName}
              placeholder="Phone Number"
              onChangeText={(text) => setphone(text)}
              defaultValue={phone}
            />
          </View>
          <View style={styles.itemTxtFirstName}>
            <TextInput
              style={styles.textFirstName}
              placeholder="Brithday"
              onChangeText={(text) => setbirthday(text)}
              defaultValue={birthday}
            />
          </View>
        </View>
        <View style={styles.bottomRegiter}>
          <TouchableOpacity style={styles.btnSignUp} onPress={() => register()}>
            <Text style={styles.txtSignUp}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnMoveLogin}
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: 'login',
                },
              })
            }
          >
            <Text style={styles.txtLogin}>Login Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
Navigation.registerComponent('login', () => Login);

const styles = StyleSheet.create({
  scroll: {
    width: '100%',
    height: 700,
    backgroundColor: defaultColors.wheat,
  },
  bodyRegister: {
    width: '100%',
    height: 700,
  },
  topRegister: {
    width: '100%',
    height: '20%',
    justifyContent: 'flex-end',
  },
  titleSignUp: {
    fontSize: font.h1,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  centerRegister: {
    height: '62%',
    width: '72%',
    marginLeft: '14%',
  },
  itemTxtFirstName: {
    width: '100%',
    marginTop: 20,
    justifyContent: 'center',
  },
  textFirstName: {
    width: '100%',
    borderWidth: 1,
    borderColor: defaultColors.black,
    height: 40,
    borderRadius: 10,
  },
  bottomRegiter: {
    width: '100%',
  },
  btnSignUp: {
    height: 46,
    width: '80%',
    borderRadius: 25,
    marginLeft: '10%',
    backgroundColor: defaultColors.aqua,
    justifyContent: 'center',
  },
  txtSignUp: {
    textAlign: 'center',
    fontSize: 20,
  },
  btnMoveLogin: {
    marginTop: 10,
  },
  txtLogin: {
    textAlign: 'center',
    fontSize: 15,
    color: defaultColors.mediumslateblue,
  },
});
export default Register;
