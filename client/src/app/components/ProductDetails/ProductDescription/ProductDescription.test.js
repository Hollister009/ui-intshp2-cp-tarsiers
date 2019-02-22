import React from 'react';
import { shallow } from 'enzyme';
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
      orderNowItem: jest.fn(),
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

  it('should be able to increment', () => {
    const wrapper = shallow(<ProductDescription {...props} />);
    const { quantity } = wrapper.state();

    wrapper.find('button[data-type="increment"]').simulate('click');
    expect(wrapper.state().quantity).toBe(quantity + 1);
  });

  it('should be able to decrement', () => {
    const wrapper = shallow(<ProductDescription {...props} />);

    wrapper.setState({ quantity: 2 });
    wrapper.update();

    const decBtn = wrapper.find('button[data-type="decrement"]');

    decBtn.simulate('click');
    expect(wrapper.state().quantity).toBe(1);
    decBtn.simulate('click');
    expect(wrapper.state().quantity).toBe(1);
  });

  it('should be able to call toggleSizes', () => {
    const wrapper = shallow(<ProductDescription {...props} />);
    const spy = jest.spyOn(wrapper.instance(), 'toggleSizes');
    const size = wrapper.find('.size').at(0);
    const evt = { preventDefault() {}, target: { size, innerText: 'S' } };

    expect(wrapper.state().sizeClicked).toBe('');
    size.simulate('click', evt);

    expect(wrapper.state().sizeClicked).toBe('s');
    expect(spy).toHaveBeenCalled();
  });

  it('should be able to call toggleColors', () => {
    const wrapper = shallow(<ProductDescription {...props} />);
    const spy = jest.spyOn(wrapper.instance(), 'toggleColors');
    const color = wrapper.find('.color').at(0);
    const evt = {
      preventDefault() {},
      target: { color, innerText: '#e63a43' }
    };

    expect(wrapper.state().activeColor).toBe('');
    color.simulate('click', evt);

    expect(wrapper.state().activeColor).toBe('#e63a43');
    expect(spy).toHaveBeenCalled();
  });

  it('should not call orderHandler when size and color isn`t clicked', () => {
    const evt = { preventDefault() {} };
    const wrapper = shallow(<ProductDescription {...props} />);
    const btn = wrapper.find('.btn_order');

    btn.simulate('click', evt);
    expect(props.orderNowItem).not.toHaveBeenCalled();
  });

  it('should not be able to call orderHandler when size is clicked and color is not', () => {
    const evt = { preventDefault() {} };
    const wrapper = shallow(<ProductDescription {...props} />);
    const btn = wrapper.find('.btn_order');

    wrapper.setState({ sizeClicked: 'S' });
    wrapper.update();
    btn.simulate('click', evt);
    expect(props.orderNowItem).not.toHaveBeenCalled();
  });

  it('should not be able to call orderHandler when color is clicked and size is not', () => {
    const evt = { preventDefault() {} };
    const wrapper = shallow(<ProductDescription {...props} />);
    const btn = wrapper.find('.btn_order');

    wrapper.setState({ activeColor: '#e63a43' });
    wrapper.update();
    btn.simulate('click', evt);
    expect(props.orderNowItem).not.toHaveBeenCalled();
  });

  it('should be able to call orderHandler', () => {
    const evt = { preventDefault() {} };
    const wrapper = shallow(<ProductDescription {...props} />);
    const btn = wrapper.find('.btn_order');

    wrapper.setState({ activeColor: '#e63a43', sizeClicked: 'S' });
    wrapper.update();
    btn.simulate('click', evt);
    expect(props.orderNowItem).toHaveBeenCalled();
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

  describe('toggleCart', () => {
    it('should call addToCart when inCart is false', () => {
      const id = props.item._id;
      const evt = { preventDefault() {} };
      const wrapper = shallow(<ProductDescription {...props} />);
      const btn = wrapper.find('button[data-type="cart-btn"]');

      btn.simulate('click', evt);
      expect(props.addToCart).toHaveBeenCalledWith(id);
    });

    it('should call removeFromCart when inCart is true', () => {
      const id = props.item._id;
      const evt = { preventDefault() {} };
      const wrapper = shallow(<ProductDescription {...props} />);
      const btn = wrapper.find('button[data-type="cart-btn"]');

      wrapper.setProps({ inCart: true });
      wrapper.update();

      btn.simulate('click', evt);
      expect(props.removeFromCart).toHaveBeenCalledWith(id);
    });
  });
});
