import React from 'react';
import Home from '../screens/Home';
import Profile from '../screens/ProfileScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ProfileWebView from '../screens/ProfileWebView';
const AppNavigator = createStackNavigator({
  Home: Home,
  Profile: Profile,
  ProfileWebView: ProfileWebView
});

const AppContainer = createAppContainer(AppNavigator);

export default () => {
  return <AppContainer />;
};
