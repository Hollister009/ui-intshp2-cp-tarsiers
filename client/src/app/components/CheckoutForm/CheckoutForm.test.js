import React from 'react';
import { shallow, mount } from 'enzyme';
import CheckoutForm from './CheckoutForm';

jest.mock('imask');
xdescribe('<CheckoutForm />', () => {
  it('should match its snapshot', () => {
    const wrapper = shallow(<CheckoutForm />);

    expect(wrapper).toMatchSnapshot();
  });

  it('component reacts properly on input change', () => {
    const wrapper = mount(<CheckoutForm />);
    const value = '80% of developers earn 20% of money';
    const evt = { target: { value } };

    wrapper.find('#name').simulate('change', evt);

    expect(wrapper.state().name.value).toBe(value);
  });

  it('component should call all the functions when necessary', () => {
    const wrapper = mount(<CheckoutForm />);

    jest.spyOn(wrapper.instance(), 'handleInputBlur');
    jest.spyOn(wrapper.instance(), 'handleInputFocus');

    wrapper.find('#name').simulate('focus');
    wrapper.find('#name').simulate('blur');

    expect(wrapper.instance().handleInputBlur).toHaveBeenCalled();
    expect(wrapper.instance().handleInputFocus).toHaveBeenCalled();
  });
});
