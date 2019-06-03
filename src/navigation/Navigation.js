import React from 'react';
import Home from '../screens/Home';

import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: Home
});

const AppContainer = createAppContainer(AppNavigator);

export default () => {
  return <AppContainer />;
};
