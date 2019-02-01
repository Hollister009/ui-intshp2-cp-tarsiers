import React from 'react';
import { shallow } from 'enzyme';
import MaxItemDetails from './MaxItemDetails';

jest.mock('../../actions');
const products = require('../../../mocks/products.json');

describe('<MaxItemDetails />', () => {
  let props;

  beforeEach(() => {
    props = {
      data: products[0],
      addToWishListItem: jest.fn(),
      removeFromWishListItem: jest.fn(),
      wished: true
    };
  });

  it('should match its snapshot', () => {
    const wrapper = shallow(<MaxItemDetails {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
