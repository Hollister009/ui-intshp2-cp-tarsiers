import React from 'react';
import { shallow } from 'enzyme';
import JoinUs from './JoinUs';

describe('<JoinUs />', () => {
  it('should match its snapshot', () => {
    const props = { email: '' };
    const wrapper = shallow(<JoinUs {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
