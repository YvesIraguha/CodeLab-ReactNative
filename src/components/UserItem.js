import React, { PureComponent } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';
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
    borderRadius: 25,
    marginRight: 10
  },
  listItemTextContainer: {
    marginLeft: 10,
    width: '90%',
    paddingBottom: 5,
    borderBottomColor: '#D48F34',
    borderBottomWidth: 1
  },
  listItemText: {
    color: '#D48F34',
    fontFamily: 'cardo-regular',
    paddingBottom: 1,
    fontSize: 20
  }
});
export default class UserItem extends PureComponent {
  render() {
    const {
      profile: { login, avatar_url, url },
      navigation
    } = this.props;
    return (
      <View style={styles.listItemContainer}>
        <Image style={styles.listItemAvatar} source={{ uri: avatar_url }} />
        <View>
          <Text style={styles.listItemText}> @{login} </Text>
          <View style={styles.listItemTextContainer} />
        </View>

        <View style={styles.lastItem}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Profile', { url })}
          >
            <Ionicons size={20} color={'#272154'} name={'ios-arrow-forward'} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}
