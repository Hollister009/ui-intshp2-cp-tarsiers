import React from 'react';
import { shallow } from 'enzyme';
import Carousel from './index';

const props = {
  children: {},
  data: []
};

describe('<Carousel />', () => {
  it('should match its snapshot', () => {
    const wrapper = shallow(<Carousel {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    expect(shallow(<Carousel {...props} />).length).toEqual(1);
  });
});
