import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../src/components/NotFound';

describe('Not found page', () => {
  it('should match the not found page', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
