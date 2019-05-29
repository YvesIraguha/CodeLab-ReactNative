import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Home from './src/screens/Home';

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
    top: 50,
    justifyContent: 'center',
    paddingLeft: 50,
    width: Math.floor(screen.width),
    height: Math.floor(screen.width / 3)
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  secondaryTitle: {
    fontSize: 16,
    // fontWeight:"bolder",
    color: 'white'
  }
});
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.mainTitle}>Lagos Engineers</Text>
          <Text style={styles.secondaryTitle}>Java language users</Text>
        </View>
        <Home />
      </View>
    );
  }
}
