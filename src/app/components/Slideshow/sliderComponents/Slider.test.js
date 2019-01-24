import React from 'react';
import { shallow } from 'enzyme';
import Slider from './Slider';

describe('<Slider />', () => {
  it('should match its snapshot', () => {
    const props = { slides: [], activeIndex: 0, isStopped: false };
    const wrapper = shallow(<Slider {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
