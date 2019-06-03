import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../src/screens/Home';
import { ActivityIndicator, FlatList, Text } from 'react-native';

describe('Home screen', () => {
  test('should render the home screen with loading spinner', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(ActivityIndicator)).toHaveLength(1);
  });

  test('should render the home screen with data', () => {
    const wrapper = shallow(<Home />);
    wrapper.setState({
      engineers: [
        { login: '@yvesiraguha', url: 'fake url', avatar_url: 'fake url' }
      ],
      loading: false
    });
    wrapper.update();
    expect(wrapper.find(FlatList)).toHaveLength(1);
  });

  test('should test component did mount', async () => {
    const wrapper = shallow(<Home />);
    fetch.mockResponseOnce(
      JSON.stringify({
        items: [
          { login: '@yvesiraguha', url: 'fake url', avatar_url: 'fake url' }
        ]
      })
    );
    const instance = wrapper.instance();
    await instance.componentDidMount();
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  test('should call load more at the end of the footer', async () => {
    const wrapper = shallow(<Home />);
    fetch.mockResponseOnce(
      JSON.stringify({
        items: [
          { login: '@yvesiraguha', url: 'fake url', avatar_url: 'fake url' }
        ]
      })
    );
    const instance = wrapper.instance();
    instance.makeRemoteRequest = jest.fn();
    wrapper.update();
    await instance.handleLoadMore();
    expect(wrapper.state().page).toEqual(2);
    expect(instance.makeRemoteRequest).toHaveBeenCalledTimes(1);
  });

  test('should render the footer with loading spinner', () => {
    const wrapper = shallow(<Home />);
    const instance = wrapper.instance();
    let footer = instance.renderFooter();
    expect(footer).toEqual(<Text />);
    wrapper.setState({ loadingMoreData: true });
    footer = instance.renderFooter();
    expect(footer).toMatchSnapshot();
  });
});
