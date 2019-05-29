import React from 'react';
import { shallow } from 'enzyme';
import ProfileImage from '../../src/components/ProfileImage';
const props = {
  imageUrl: 'fake url',
  username: 'yves'
};

describe('Profile image section', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<ProfileImage profile={props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
