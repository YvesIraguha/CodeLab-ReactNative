import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/components/HeaderHome';
import { ActivityIndicator, View } from 'react-native';

describe('App component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.runAllTimers();
  });
  test('should render the App component with activity loading indicator', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ActivityIndicator)).toHaveLength(1);
  });

  test('should render the App component with the header banner component ', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ fontLoaded: true });
    wrapper.update();
    expect(wrapper.find(View)).toHaveLength(2);
  });
});
