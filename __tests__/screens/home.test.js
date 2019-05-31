import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../src/screens/Home';

describe('Home screen', () => {
  test('should render the home screen with loading spinner', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render the home screen with content', async () => {
    const wrapper = shallow(<Home />);
    fetch.mockResponseOnce(
      JSON.stringify({
        items: [
          { login: '@yvesiraguha', url: 'fake url', avatar_url: 'fake url' }
        ]
      })
    );
    const instance = wrapper.instance();
    await instance.componentDidMount();
    expect(wrapper).toMatchSnapshot();
  });
});
