import React from 'react';
import { shallow } from 'enzyme';
import ProductDetails from './ProductDetails';

const products = require('../../../mocks/products.json');

describe('<ProductDetails />', () => {
  let props;

  beforeEach(() => {
    props = {
      id: '5c47312be7179a544940e080',
      products,
      cart: {
        value: 0,
        productsIds: [],
        orders: []
      }
    };
  });

  it('should match its snapshot', () => {
    const wrapper = shallow(<ProductDetails {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
