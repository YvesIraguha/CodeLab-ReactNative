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
      <View style={{ flex: 1, height: 100 }}>
        <WebView source={{ uri: url }} style={{ marginTop: 20 }} />
      </View>
    );
  }
}
