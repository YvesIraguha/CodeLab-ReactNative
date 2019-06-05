import React, { Component } from 'react';
import Navigation from './src/navigation/Navigation';
import { ActivityIndicator, View } from 'react-native';
import { Font } from 'expo';
const cardoFont = require('./assets/fonts/Cardo-Regular.ttf');
const cardoBold = require('./assets/fonts/Cardo-Bold.ttf');
export default class App extends Component {
  state = {
    fontLoaded: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      'cardo-regular': cardoFont,
      'cardo-bold': cardoBold
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;
    return fontLoaded ? (
      <Navigation />
    ) : (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }
}
