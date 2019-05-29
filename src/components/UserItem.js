import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',

    width: Math.floor((screen.width * 3) / 4),
    margin: 10
  },
  lastItem: {
    marginLeft: 'auto'
  },
  listItemAvatar: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  listItemText: {
    color: 'black',
    textDecorationLine: 'underline',
    paddingBottom: 1,
    fontSize: 20
  }
});
export default class UserItem extends Component {
  render() {
    const { login, avatar_url } = this.props.profile;
    return (
      <View style={styles.listItemContainer}>
        <Image style={styles.listItemAvatar} source={{ uri: avatar_url }} />
        <Text style={styles.listItemText}> @{login} </Text>
        <View style={styles.lastItem}>
          <Ionicons size={30} color={'blue'} name={'ios-arrow-forward'} />
        </View>
      </View>
    );
  }
}
