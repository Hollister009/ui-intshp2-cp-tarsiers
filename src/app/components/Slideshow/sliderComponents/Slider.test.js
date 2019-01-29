import React from 'react';
import { shallow, mount } from 'enzyme';
import Slider from './Slider';
import Images from './Slides';

describe('<Slider />', () => {
  it('should match its snapshot', () => {
    const props = { slides: [], activeIndex: 0, isStopped: false };
    const wrapper = shallow(<Slider {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle click slider indicator', () => {
    const props = { slides: [] };
    const wrapper = mount(<Slider {...props} />);

    wrapper.setProps({ onClick: 'handleClickIndicator' });
    expect(wrapper.props().onClick).toBe('handleClickIndicator');
  });

  it('should contain Image component', () => {
    const props = { slides: ['slide1', 'slide2'] };
    const wrapper = shallow(<Slider {...props} />);

    expect(wrapper.find(<Images />).exists).toBeTruthy();
  });
});
