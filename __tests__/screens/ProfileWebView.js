import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../../src/screens/ProfileWebView';
import { WebView } from 'react-native';

const props = {
  navigation: {
    state: {
      params: { url: 'fakeUrl' }
    }
  }
};

describe('profile screen', () => {
  test('should render the profile screen using in app browser', () => {
    const wrapper = shallow(<Profile {...props} />);
    expect(wrapper.find(WebView)).toHaveLength(1);
  });

  test('should match snapshot', async () => {
    const wrapper = shallow(<Profile {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
