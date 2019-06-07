import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import styles from '../screens/ProfileStyleSheet';

export default class GitHubLinKContainer extends Component {
  constructor() {
    super();
  }
  openInWeb = () => {
    const { navigation, url } = this.props;
    navigation.navigate('ProfileWebView', { url });
  };

  render() {
    const { fullName, username } = this.props;
    return (
      <View style={styles.aboutSectionItems}>
        <Text style={styles.itemTitle}>GitHub Link</Text>
        <TouchableWithoutFeedback onPress={this.openInWeb}>
          <View style={styles.fullName}>
            <Text style={styles.itemText}>
              {fullName ? fullName : `@${username}`}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
