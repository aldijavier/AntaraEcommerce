import { createStackNavigator, createAppContainer } from 'react-navigation';
import BerandaScreen from './src/screens/BerandaScreen';

const navigator = createStackNavigator(
  {
    Beranda: BerandaScreen
  },
  {
    initialRouteName: 'Beranda',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
