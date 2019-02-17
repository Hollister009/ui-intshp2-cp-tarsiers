import React from 'react';
import { shallow } from 'enzyme';
import ProductDescription from './ProductDescription';

const products = require('../../../../mocks/products.json');

describe('<ProductDescription />', () => {
  it('should match its snapshot', () => {
    const wrapper = shallow(<ProductDescription item={products[2]} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should return null when props are empty', () => {
    const wrapper = shallow(<ProductDescription />);

    expect(wrapper.html()).toBe(null);
  });

  it('should be able to increment', () => {
    const wrapper = shallow(<ProductDescription item={products[2]} />);
    const { quantity } = wrapper.state();

    wrapper.find('button[data-type="increment"]').simulate('click');
    expect(wrapper.state().quantity).toBe(quantity + 1);
  });

  it('should be able to decrement', () => {
    const wrapper = shallow(<ProductDescription item={products[2]} />);

    wrapper.setState({ quantity: 1 });
    wrapper.update();

    const decBtn = wrapper.find('button[data-type="decrement"]');

    decBtn.simulate('click');
    expect(wrapper.state().quantity).toBe(0);
    decBtn.simulate('click');
    expect(wrapper.state().quantity).toBe(0);
  });
});
