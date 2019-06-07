import React from 'react';
import { shallow } from 'enzyme';
import AboutSectionItem from '../../src/components/AboutSectionItem';
const props = {
  item: 'repositories',
  amount: 12
};

describe('User item on homepage', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<AboutSectionItem profile={props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
