import React from 'react';
import moxios from 'moxios';
import { shallow } from 'enzyme';
import Profile from '../../src/screens/ProfileScreen';
import { ActivityIndicator } from 'react-native';

const props = {
  navigation: {
    state: {
      params: {
        url: 'fakeUrl'
      }
    }
  }
};
const profile = {
  login: 'yves',
  name: 'Yves Iraguha',
  avatar_url: 'fakeUrl',
  public_repos: 10,
  stars: 12,
  followers: 12,
  following: 32,
  html_url: 'fakeUrl'
};
describe('profile screen', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('should render the profile screen with loading spinner', () => {
    const wrapper = shallow(<Profile {...props} />);
    expect(wrapper.find(ActivityIndicator)).toHaveLength(1);
  });

  test('should load the data for displaying user profile', async () => {
    const wrapper = shallow(<Profile {...props} />);
    await moxios.stubRequest('fakeUrl', {
      status: 200,
      response: {
        ...Profile
      }
    });

    wrapper
      .instance()
      .componentDidMount()
      .then(() => {
        expect(wrapper.state()).toEqual({ loading: false, profile });
      });
  });

  test('should load the error on the failure of the request', async () => {
    const wrapper = shallow(<Profile {...props} />);
    await moxios.stubRequest('fakeUrl', {
      status: 404,
      response: {
        message: 'some thing went wrong'
      }
    });
    wrapper
      .instance()
      .componentDidMount()
      .then(() => {
        expect(wrapper.state().error).toEqual('Ooops page not found');
      });
  });
});
