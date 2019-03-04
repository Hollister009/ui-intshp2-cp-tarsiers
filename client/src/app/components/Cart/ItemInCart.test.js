import React from 'react';
import { shallow } from 'enzyme';
import ItemInCart from './ItemInCart';

const products = require('../../../mocks/products.json');

describe('<ItemInCart />', () => {
  let props;

  beforeEach(() => {
    props = {
      item: products[2],
      setColor: jest.fn(),
      setSize: jest.fn(),
      setQuantityAndTotal: jest.fn(),
      removeFromCart: jest.fn(),
      createNotification: jest.fn()
    };
  });

  it('should match its snapshot', () => {
    const wrapper = shallow(<ItemInCart {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  xit('should return null when item is falsy', () => {
    const wrapper = shallow(<ItemInCart {...props} />);

    expect(wrapper.html()).toBe(null);
  });

  xit('should be able to increment', () => {
    const wrapper = shallow(<ItemInCart {...props} />);
    const chosenQuantity = wrapper.props;

    wrapper.find('button[data-type="increment"]').simulate('click');
    expect(chosenQuantity()).toBe(chosenQuantity() + 1);
  });

  xit('should be able to decrement', () => {
    const wrapper = shallow(<ItemInCart {...props} />);
    const chosenQuantity = wrapper.props;
    const decBtn = wrapper.find('button[data-type="decrement"]');

    decBtn.simulate('click');
    expect(chosenQuantity).toBe(1);
    decBtn.simulate('click');
    expect(chosenQuantity).toBe(1);
  });

  it('should be able to call toggleSizes', () => {
    const wrapper = shallow(<ItemInCart {...props} />);
    const spy = jest.spyOn(wrapper.instance(), 'toggleSizes');
    const size = wrapper.find('.size').at(0);
    const evt = { preventDefault() {}, target: { size, innerText: 'S' } };

    expect(wrapper.state().sizeClicked).toBe('');
    size.simulate('click', evt);

    expect(wrapper.state().sizeClicked).toBe('s');
    expect(spy).toHaveBeenCalled();
  });

  it('should be able to call toggleColors', () => {
    const wrapper = shallow(<ItemInCart {...props} />);
    const spy = jest.spyOn(wrapper.instance(), 'toggleColors');
    const color = wrapper.find('.color').at(0);
    const evt = {
      preventDefault() {},
      target: { color, innerText: '#171717' }
    };

    expect(wrapper.state().activeColor).toBe('');
    color.simulate('click', evt);

    expect(wrapper.state().activeColor).toBe('#171717');
    expect(spy).toHaveBeenCalled();
  });

  it('should call removeFromCart when inCart is true', () => {
    const { item } = props;
    const evt = { preventDefault() {} };
    const wrapper = shallow(<ItemInCart {...props} />);
    const btn = wrapper.find('button[data-type="remove-btn"]');

    wrapper.setProps({ inCart: true });
    wrapper.update();

    btn.simulate('click', evt);
    expect(props.removeFromCart).toHaveBeenCalledWith(item);
  });
});
