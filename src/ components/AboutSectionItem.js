import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../screens/ProfileStyleSheet';
export default class AboutItem extends Component {
  render() {
    const { item, amount } = this.props;
    return (
      <View style={styles.aboutSectionItems}>
        <Text>Number of {item}</Text>
        <Text style={styles.itemText}>{amount}</Text>
      </View>
    );
  }
}
