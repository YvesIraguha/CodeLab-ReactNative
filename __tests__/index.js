import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('App component', () => {
  test('should render the App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
