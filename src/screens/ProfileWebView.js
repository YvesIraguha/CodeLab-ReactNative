import React, { Component } from 'react';
import { View, WebView } from 'react-native';

export default class ProfileWebView extends Component {
  render() {
    const {
      navigation: {
        state: {
          params: { url }
        }
      }
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <WebView source={{ uri: url }} />
      </View>
    );
  }
}
