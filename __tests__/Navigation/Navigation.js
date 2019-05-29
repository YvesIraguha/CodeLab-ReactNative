import React from 'react';
import { shallow } from 'enzyme';

import Navigator from '../../src/navigation/Navigation';

describe('Navigation component', () => {
  test('should render the app container with routes', () => {
    const wrapper = shallow(<Navigator />);
    expect(wrapper).toMatchSnapshot();
  });
});
