import React from 'react';
import { shallow } from 'enzyme';
import { TouchableWithoutFeedback, Share } from 'react-native';
import ProfileImage from '../../src/components/ProfileImage';

const props = {
  imageUrl: 'fake url',
  username: 'yves',
  url: 'fake url'
};

describe('Profile image section', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<ProfileImage profile={props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should share the profile ', async () => {
    const share = jest.spyOn(Share, 'share');

    const wrapper = shallow(<ProfileImage profile={props} />);
    await wrapper.find(TouchableWithoutFeedback).simulate('press');
    expect(share).toHaveBeenCalledTimes(1);
    expect(wrapper).toMatchSnapshot();
  });
});
