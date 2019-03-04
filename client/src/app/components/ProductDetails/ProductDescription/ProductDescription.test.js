import React from 'react';
import { shallow, mount } from 'enzyme';
import ProductDescription from './ProductDescription';

const products = require('../../../../mocks/products.json');

describe('<ProductDescription />', () => {
  let props;

  beforeEach(() => {
    props = {
      item: products[2],
      wished: false,
      inCart: false,
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
      createNotification: jest.fn()
    };
  });

  it('should match its snapshot', () => {
    const wrapper = shallow(<ProductDescription {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should return null when item is falsy', () => {
    const wrapper = shallow(<ProductDescription />);

    expect(wrapper.html()).toBe(null);
  });

  xdescribe('toggleWishList', () => {
    it('should call addItem when wished is false', () => {
      const evt = { preventDefault() {} };
      const wrapper = shallow(<ProductDescription {...props} />);
      const spy = jest.spyOn(wrapper.instance(), 'addItem');
      const btn = wrapper.find('button[data-type="wishlist-btn"]');

      btn.simulate('click', evt);
      expect(wrapper.state().heartDisabled).toBe(true);
      expect(spy).toHaveBeenCalled();
    });

    it('should call removeItem when wished is true', () => {
      const evt = { preventDefault() {} };
      const wrapper = shallow(<ProductDescription {...props} />);
      const spy = jest.spyOn(wrapper.instance(), 'removeItem');
      const btn = wrapper.find('button[data-type="wishlist-btn"]');

      wrapper.setProps({ wished: true });
      wrapper.update();

      btn.simulate('click', evt);
      expect(wrapper.state().heartDisabled).toBe(false);
      expect(spy).toHaveBeenCalled();
    });
  });

  xdescribe('cart', () => {
    it('should call addToCart when inCart is false', () => {
      const id = props.item._id;
      const evt = { preventDefault() {} };
      const wrapper = mount(<ProductDescription {...props} />);
      const btn = wrapper.find('button[data-type="cart-btn"]');

      btn.simulate('click', evt);
      expect(props.addToCart).toHaveBeenCalledWith(id);
    });

    it('should call removeFromCart when inCart is true', () => {
      const id = props.item._id;
      const evt = { preventDefault() {} };
      const wrapper = mount(<ProductDescription {...props} />);
      const btn = wrapper.find('button[data-type="cart-btn"]');

      wrapper.setProps({ inCart: true });
      wrapper.update();

      btn.simulate('click', evt);
      expect(props.removeFromCart).toHaveBeenCalledWith(id);
    });
  });
});
