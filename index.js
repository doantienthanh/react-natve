/**
 * @format
 */
import { Navigation } from 'react-native-navigation';
import index from './src/login/screen/Login';
import { registerScreens } from './src/login/navigation/RegisterScreen';
// Navigation.registerComponent('com.myApp.WelcomeScreen', () => index);
registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Login',
            },
          },
        ],
        options: {
          topBar: {
            visible: false,
            height: 0,
          },
        },
      },
    },
  });
});
