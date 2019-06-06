import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  Share,
  TouchableWithoutFeedback
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from '../screens/ProfileStyleSheet';

export default class ProfileImage extends Component {
  onShare = async () => {
    const { username, url } = this.props;
    try {
      const result = await Share.share({
        message: `Check out this awesome developer @${username}, ${url}`
      });
      if (result.action === Share.sharedAction) {
        alert('shared');
      } else if (result.action === Share.dismissedAction) {
        alert('dismissed');
      }
    } catch (error) {
      alert(error.message);
    }
  };
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
            <TouchableWithoutFeedback onPress={this.onShare}>
              <AntDesign size={45} color={'#fff'} name={'sharealt'} />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
