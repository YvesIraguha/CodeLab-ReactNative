import React from 'react';
import { shallow } from 'enzyme';
import App from '../src';

describe('App component', () => {
  test('should render the App component', () => {
    const wrapper = shallow(<App />);
    console.log('hello world');
    expect(wrapper).toMatchSnapshot();
  });
});
