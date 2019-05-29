import React from 'react';
import Home from '../screens/Home';
import Profile from '../screens/ProfileScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: Home,
  Profile: Profile
});

const AppContainer = createAppContainer(AppNavigator);

export default () => {
  return <AppContainer />;
};
