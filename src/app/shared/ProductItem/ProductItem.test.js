import React from 'react';
import { shallow } from 'enzyme';
import ProductItem from './index';

describe('<ProductItem />', () => {
  let props;

  beforeEach(() => {
    props = {
      showDetails: false,
      data: [],
      extended: false,
      src: '',
      title: '',
      price: ''
    };
  });

  it('should match its snapshot', () => {
    const wrapper = shallow(<ProductItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should renders without crashing', () => {
    expect(shallow(<ProductItem {...props} />).length).toEqual(1);
  });

  it('should show Details on hover', () => {
    const wrapper = shallow(<ProductItem {...props} />);

    expect(wrapper.state('showDetails')).toBe(false);
    wrapper.simulate('mouseenter');
    expect(wrapper.state('showDetails')).toBe(true);
  });
});
