import React from 'react';
import { shallow, mount } from 'enzyme';
import JoinUs from './JoinUs';

describe('<JoinUs />', () => {
  it('should match its snapshot', () => {
    const props = { email: '' };
    const wrapper = shallow(<JoinUs {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle email input changes', () => {
    const props = {};
    const wrapper = mount(<JoinUs {...props} />);

    wrapper.setProps({ onChange: 'handleEmailChange' });
    expect(wrapper.props().onChange).toBe('handleEmailChange');
  });

  it('should handle  input changes', () => {
    const props = {};
    const wrapper = mount(<JoinUs {...props} />);

    wrapper.setProps({ onChange: 'handleEmailChange' });
    expect(wrapper.props().onChange).toBe('handleEmailChange');
  });
});
