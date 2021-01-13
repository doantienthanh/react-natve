/**
 * @format
 */
import { Navigation } from 'react-native-navigation';
import index from './src/login/screen/Login';
Navigation.registerComponent('com.myApp.WelcomeScreen', () => index);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.WelcomeScreen',
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
