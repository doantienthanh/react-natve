import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import TodoList from './TodoList';
import Register from './Register';
import Calculator from './App';
const Menu = (props) => {
  return (
    <View style={styles.root}>
      <Button
        style={styles.btnMenu}
        title="Home"
        color="#a9a9a9"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'Menu',
              options: {
                topBar: {
                  title: {
                    text: 'Home',
                  },
                },
              },
            },
          })
        }
      />
      <Button
        style={styles.btnMenu}
        title="Calculator"
        color="#a9a9a9"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'Calculator',
              options: {
                topBar: {
                  title: {
                    text: 'Calculator',
                  },
                },
              },
            },
          })
        }
      />
      <Button
        style={styles.btnMenu}
        title="Register"
        color="#a9a9a9"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'Register',
              options: {
                topBar: {
                  title: {
                    text: 'Register',
                  },
                },
              },
            },
          })
        }
      />
      <Button
        style={styles.btnMenu}
        title="TodoList"
        color="#a9a9a9"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'TodoList',
              options: {
                topBar: {
                  title: {
                    text: 'TodoList',
                  },
                },
              },
            },
          })
        }
      />
    </View>
  );
};
Navigation.registerComponent('Menu', () => Menu);
Navigation.registerComponent('Calculator', () => Calculator);
Navigation.registerComponent('Register', () => Register);
Navigation.registerComponent('TodoList', () => TodoList);
const styles = StyleSheet.create({
  root: {
    width: '100%',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#a9a9a9',
    marginEnd:20,
  },
  btnMenu: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    height: 50,
    alignItems: 'center',
    marginLeft: 5,
  },
});
export default Menu;
