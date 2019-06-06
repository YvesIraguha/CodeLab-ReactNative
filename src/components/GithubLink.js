import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from '../screens/ProfileStyleSheet';

export default class GitHubLinKContainer extends Component {
  render() {
    const { fullName, username } = this.props;
    return (
      <View style={styles.aboutSectionItems}>
        <Text style={styles.itemTitle}>GitHub Link</Text>
        <TouchableHighlight
          onPress={() => this.alert('Hey you clicked this guy')}
        >
          <View style={styles.fullName}>
            <Text style={styles.itemText}>
              {fullName ? fullName : `@${username}`}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
