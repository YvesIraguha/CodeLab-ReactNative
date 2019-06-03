import { StyleSheet, Dimensions } from 'react-native';
const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profileImageSection: {
    flex: 1,
    justifyContent: 'flex-end',
    width: screen.width
  },
  aboutSection: {
    flex: 1,
    width: Math.floor((screen.width * 3) / 4),
    marginTop: 50,
    alignSelf: 'center'
  },
  aboutSectionItems: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 15,
    justifyContent: 'space-between'
  },
  itemText: {
    color: '#D48F34'
  },
  username: {
    justifyContent: 'center',
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20
  },
  usernameContainer: {
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    height: 40,
    marginLeft: 10
  },
  aboutTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4834D4',
    fontSize: 25
  },
  fullName: {
    borderBottomColor: '#D48F34',
    borderBottomWidth: 1,
    paddingBottom: 5
  },
  shareIconContainer: {
    height: 72,
    width: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(72, 52, 212, 0.48)',
    marginRight: 10
  }
});

export default styles;
