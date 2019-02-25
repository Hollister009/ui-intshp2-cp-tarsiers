import React from 'react';
import { shallow } from 'enzyme';
import RelatedProducts from './RelatedProducts';

const products = require('../../../../mocks/products.json');

describe('<RelatedProducts />', () => {
  it('should match its snapshot', () => {
    const item = products[0];
    const wrapper = shallow(<RelatedProducts item={item} />);

    expect(wrapper).toMatchSnapshot();
  });
});
