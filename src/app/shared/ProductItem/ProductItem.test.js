import React from 'react';
import { shallow } from 'enzyme';
import ProductItem from './index';

const props = {
  showDetails: false,
  data: [],
  extended: false,
  src: '',
  title: '',
  price: ''
};

describe('<ProductItem />', () => {
  it('should match its snapshot', () => {
    const wrapper = shallow(<ProductItem {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
  it('should renders without crashing', () => {
    expect(shallow(<ProductItem {...props} />).length).toEqual(1);
  });
});
