import React from 'react';
import { shallow } from 'enzyme';
import GithubLink from '../../src/components/GithubLink';
const props = {
  fullName: 'Yves Iraguha',
  username: 'iraguha'
};

describe('Git hub link container', () => {
  it('should match the snapshot with fullName', () => {
    const wrapper = shallow(<GithubLink profile={props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot without fullName', () => {
    const wrapper = shallow(<GithubLink profile={props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
