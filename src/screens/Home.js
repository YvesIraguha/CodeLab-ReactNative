import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import UserItem from '../components/UserItem';

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    marginBottom: 10
  },
  title: {
    marginLeft: 5,
    marginTop: 30,
    marginBottom: 15,
    fontFamily: 'cardo-regular'
  }
});
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      engineers: [],
      loading: true
    };
  }

  componentDidMount = () => {
    this.setState({ loading: true });
    return fetch(
      'https://api.github.com/search/users?q=location:lagos+language:java'
    )
      .then(response => response.json())
      .then(response => {
        this.setState({ engineers: response.items, loading: false });
      })
      .catch(error => this.setState({ error: error }));
  };
  render() {
    const { engineers, loading } = this.state;
    return loading ? (
      <ActivityIndicator size="large" color="#0000ff" />
    ) : (
      <View style={styles.container}>
        <Text style={styles.title}>{engineers.length} Engineers</Text>
        <FlatList
          data={[...engineers]}
          renderItem={({ item }) => <UserItem profile={item} />}
          keyExtractor={(item, index) => `${item.id}`}
        />
      </View>
    );
  }
}
