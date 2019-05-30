import React from 'react';
import { shallow } from 'enzyme';
import UserItem from '../../src/components/UserItem';
const props = {
  avatar_url: 'fake url',
  login: 'yves'
};

describe('User item on homepage', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<UserItem profile={props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
