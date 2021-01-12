import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Input from './Input';
import Password from './Password';
const Register = () => {
  const [users, setUsers] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    userName: '',
    password: '',
  });
  const getDataForm = () => {
    alert(users.fullName);
  };
  return (
    <View>
      <ScrollView>
        <View style={styles.bodyRegister}>
          <View style={styles.title}>
            <Text style={styles.titleRigister}>SIGN IN</Text>
          </View>
          <Input title="Full Name (*)" propsChangeText={(text) => setUsers({ fullName: text })} />
          <Input title="Email (*)" />
          <Input title="Phone Number(*)" />
          <Input title="Username(*)" />
          <Password title="Password (*)" />
          <Password title="Enter password again (*)" />
          <View style={styles.rowLOgin}>
            <TouchableOpacity style={styles.btnLogin}>
              <Text style={styles.textBtnLogin}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnRgister} onPress={() => getDataForm()}>
              <Text style={styles.textBtnRegister}>Register</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 20, marginLeft: 30 }}>
            <Text> thanh confirmings the account you agree to our rules.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  bodyRegister: {
    color: 'black',
  },
  title: {
    marginTop: 20,
    height: 50,
  },
  titleRigister: {
    fontSize: 40,
    textAlign: 'center',
  },
  rowLOgin: {
    flexDirection: 'row',
    width: 300,
    marginLeft: 50,
    marginTop: 20,
  },
  btnLogin: {
    borderWidth: 1,
    borderColor: '#00ffff',
    width: 100,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
  },
  textBtnLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    marginLeft: 22,
    fontSize: 17,
    marginTop: 15,
  },
  btnRgister: {
    width: 100,
    height: 40,
    marginLeft: 50,
    backgroundColor: '#00ffff',
    borderRadius: 5,
    justifyContent: 'center',
  },
  textBtnRegister: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    marginLeft: 22,
    fontSize: 17,
    marginTop: 15,
    color: 'red',
  },
});
export default Register;
