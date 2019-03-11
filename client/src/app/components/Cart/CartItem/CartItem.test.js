import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './CartItem';
import styles from './CartItem.module.scss';

const products = require('../../../../mocks/products.json');

xdescribe('<CartItem />', () => {
  let props;
  const item = {
    ...products[2],
    chosenSize: null,
    chosenColor: null,
    chosenQuantity: 1,
    total: products[2].price
  };

  beforeEach(() => {
    props = {
      item,
      styles,
      removeFromCart: jest.fn(),
      updateCartItem: jest.fn(),
      createNotification: jest.fn()
    };
  });

  xit('should match its snapshot', () => {
    const wrapper = shallow(<CartItem {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  xit('should return null when item is falsy', () => {
    const wrapper = shallow(<CartItem {...props} />);

    expect(wrapper.html()).toBe(null);
  });

  xit('should be able to increment', () => {
    const wrapper = shallow(<CartItem {...props} />);
    const chosenQuantity = wrapper.props;

    wrapper.find('button[data-type="increment"]').simulate('click');
    expect(chosenQuantity()).toBe(chosenQuantity() + 1);
  });

  xit('should be able to decrement', () => {
    const wrapper = shallow(<CartItem {...props} />);
    const chosenQuantity = wrapper.props;
    const decBtn = wrapper.find('button[data-type="decrement"]');

    decBtn.simulate('click');
    expect(chosenQuantity).toBe(1);
    decBtn.simulate('click');
    expect(chosenQuantity).toBe(1);
  });

  xit('should be able to call toggleSizes', () => {
    const wrapper = shallow(<CartItem {...props} />);
    const spy = jest.spyOn(wrapper.instance(), 'toggleSizes');
    const size = wrapper.find('.size').at(0);
    const evt = { preventDefault() {}, target: { size, innerText: 'S' } };

    expect(wrapper.state().chosenSize).toBe(null);
    size.simulate('click', evt);

    expect(wrapper.state().chosenSize).toBe('s');
    expect(spy).toHaveBeenCalled();
  });

  it('should be able to call toggleColors', () => {
    const wrapper = shallow(<CartItem {...props} />);
    const spy = jest.spyOn(wrapper.instance(), 'toggleColors');
    const color = wrapper.find('.color').at(0);
    const evt = {
      preventDefault() {},
      target: { color, innerText: '#171717' }
    };

    expect(wrapper.state().chosenColor).toBe(null);
    color.simulate('click', evt);

    expect(wrapper.state().chosenColor).toBe('#171717');
    expect(spy).toHaveBeenCalled();
  });

  xit('should call removeFromCart when inCart is true', () => {
    const evt = { preventDefault() {} };
    const wrapper = shallow(<CartItem {...props} />);
    const btn = wrapper.find('button[data-type="remove-btn"]');

    wrapper.setProps({ inCart: true });
    wrapper.update();

    btn.simulate('click', evt);
    expect(props.removeFromCart).toHaveBeenCalledWith(item);
  });
});
