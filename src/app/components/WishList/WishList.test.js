import React from 'react';
import { shallow } from 'enzyme';
import WishList from './WishList';

describe('<WishList />', () => {
  it('should match its snapshot', () => {
    const props = { products: [], extended: false };
    const wrapper = shallow(<WishList {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
