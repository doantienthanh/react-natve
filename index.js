/**
 * @format
 */
import { Navigation } from 'react-native-navigation';
import Page from './components/smartPhones/Page';

Navigation.registerComponent('com.myApp.WelcomeScreen', () => Page);

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
