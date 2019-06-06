import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Linking } from 'react-native';
import WebView from 'react-native-webview';
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
        <TouchableHighlight onPress={this.openInWeb}>
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
