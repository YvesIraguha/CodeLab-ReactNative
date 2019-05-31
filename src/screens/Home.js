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
      page: 1,
      loading: true,
      loadingMoreData: false
    };
  }

  componentDidMount = () => {
    this.setState({ loading: true });
    this.makeRemoteRequest();
  };

  makeRemoteRequest = () => {
    const { page } = this.state;
    return fetch(
      `https://api.github.com/search/users?q=location:lagos+language:java&per_page=20&page=${page}`
    )
      .then(response => response.json())
      .then(response => {
        this.setState({
          engineers: [...this.state.engineers, ...response.items],
          loading: false,
          loadingMoreData: false
        });
      })
      .catch(error => this.setState({ error: error }));
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1,
        loadingMoreData: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderFooter = () => {
    const { loadingMoreData } = this.state;
    return loadingMoreData ? (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderTopColor: '#0000ff'
        }}
      >
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    ) : null;
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
          keyExtractor={(item, index) => `${item.id + index}`}
          ListFooterComponent={this.renderFooter}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={1}
        />
      </View>
    );
  }
}
