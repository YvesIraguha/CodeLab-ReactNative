import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../src/screens/Home';

describe('Home screen', () => {
  test('should render the home screen', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
