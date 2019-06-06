import React, { Component } from 'react';

import axios from 'axios';
import { View, Text, ActivityIndicator, StatusBar } from 'react-native';
import styles from './ProfileStyleSheet';
import ProfileImage from '../components/ProfileImage';
import AboutItem from '../components/AboutSectionItem';
import GithubLink from '../components/GithubLink';
import NotFound from '../components/NotFound';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      profile: {
        login: '',
        name: '',
        avatar_url: '',
        public_repos: 0,
        stars: 0,
        followers: 0,
        following: 0,
        html_url: ''
      }
    };
  }

  componentDidMount = async () => {
    const newUrl = this.props.navigation.state.params.url;
    try {
      const response = await axios.get(newUrl);
      this.setState({
        profile: { ...this.state.profile, ...response.data },
        loading: false
      });
    } catch (error) {
      this.setState({ error: 'Ooops page not found', loading: false });
    }
  };

  render() {
    const {
      profile: {
        name: fullName,
        avatar_url: imageUrl,
        public_repos: repositories,
        stars,
        login: username,
        followers,
        following,
        html_url: gitHubUrl
      },
      loading,
      error
    } = this.state;

    return loading ? (
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator color="blue" size="large" />
      </View>
    ) : error ? (
      <NotFound />
    ) : (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <ProfileImage username={username} imageUrl={imageUrl} url={gitHubUrl} />
        <View style={styles.aboutSection}>
          <Text style={styles.aboutTitle}>About</Text>
          <GithubLink fullName={fullName} username={username} />
          <AboutItem item="repositories" amount={repositories} />
          <AboutItem item="stars" amount={stars} />
          <AboutItem item="followers" amount={followers} />
          <AboutItem item="following" amount={following} />
        </View>
      </View>
    );
  }
}
