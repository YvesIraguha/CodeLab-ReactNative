import React, { Component } from 'react';
<<<<<<< HEAD
import { Text, View, ImageBackground } from 'react-native';
=======
import {
  Text,
  View,
  ImageBackground,
  Share,
  TouchableWithoutFeedback
} from 'react-native';
>>>>>>> feature(fix): share functionality
import { AntDesign } from '@expo/vector-icons';
import styles from '../screens/ProfileStyleSheet';

export default class ProfileImage extends Component {
<<<<<<< HEAD
  render() {
    const { username, imageUrl } = this.props;
=======
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Check out this awesome developer @YvesIraguha, https://avatars1.githubusercontent.com/u/19608533?v=4.'
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
    const username = 'Yves';
    const imageUrl = 'https://avatars1.githubusercontent.com/u/19608533?v=4';
>>>>>>> feature(fix): share functionality
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
<<<<<<< HEAD
            <AntDesign size={45} color={'#fff'} name={'sharealt'} />
=======
            <TouchableWithoutFeedback onPress={this.onShare}>
              <AntDesign size={45} color={'#fff'} name={'sharealt'} />
            </TouchableWithoutFeedback>
>>>>>>> feature(fix): share functionality
          </View>
        </View>
      </ImageBackground>
    );
  }
}
