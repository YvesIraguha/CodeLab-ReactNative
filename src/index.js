import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  ActivityIndicator
} from 'react-native';
import Home from './screens/Home';
import { Font } from 'expo';
const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    backgroundColor: '#4834D4',
    position: 'absolute',
    top: 0,
    justifyContent: 'center',
    paddingLeft: 50,
    width: Math.floor(screen.width),
    height: Math.floor(screen.height / 5)
  },
  mainTitle: {
    fontSize: 30,
    fontFamily: 'cardo-bold',
    fontWeight: 'bold',
    color: 'white'
  },
  secondaryTitle: {
    fontFamily: 'cardo-regular',
    fontSize: 16,
    color: 'white'
  }
});
export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'cardo-regular': require('../assets/fonts/Cardo-Regular.ttf'),
      'cardo-bold': require('../assets/fonts/Cardo-Bold.ttf')
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return this.state.fontLoaded ? (
      <View style={styles.container}>
        <StatusBar backgroundColor="#272154" barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.mainTitle}>Lagos Engineers</Text>
          <Text style={styles.secondaryTitle}>Java language users</Text>
        </View>
        <Home />
      </View>
    ) : (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}
