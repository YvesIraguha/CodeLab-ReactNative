import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from '../screens/ProfileStyleSheet';

export default class ProfileImage extends Component {
  render() {
    const { username, imageUrl } = this.props;
    return (
      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.profileImageSection}
      >
        <View style={styles.aboutSectionItems}>
          <View style={styles.usernameContainer}>
            <Text style={styles.username}>@{username}</Text>
          </View>
          <View style={styles.shareIconContainer}>
            <AntDesign size={45} color={'#fff'} name={'sharealt'} />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
