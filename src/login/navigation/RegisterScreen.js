import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Home from '../screen/Home';
import Login from '../screen/Login';
import Register from '../screen/Register';
import ForgotPassword from '../screen/ForgotPassword';
function ReduxProvider(Component) {
  return (props) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}
export function registerScreens() {
  Navigation.registerComponent(
    'Home',
    () => ReduxProvider(Home),
    () => Home,
  );
  Navigation.registerComponent(
    'Login',
    () => ReduxProvider(Login),
    () => Login,
  );
  Navigation.registerComponent(
    'Register',
    () => ReduxProvider(Register),
    () => Register,
  );
  Navigation.registerComponent(
    'ForgotPassword',
    () => ReduxProvider(ForgotPassword),
    () => ForgotPassword,
  );
}
