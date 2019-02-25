import React from 'react';
import { shallow, mount } from 'enzyme';
import JoinUs from './JoinUs';

describe('<JoinUs />', () => {
  it('should match its snapshot', () => {
    const wrapper = shallow(<JoinUs />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to call handleEmailChange and set state', () => {
    const evt = { target: { value: 'example@mail.com' } };
    const wrapper = shallow(<JoinUs />);

    wrapper.find('#email').simulate('change', evt);
    expect(wrapper.state().email).toBe(evt.target.value);
  });

  it('should be able to call showSnackbarHandler', () => {
    const wrapper = mount(<JoinUs />);
    const instance = wrapper.instance();

    instance.snackbarRef.current.openSnackBar = jest.fn();
    wrapper.update();
    const ref = instance.snackbarRef.current.openSnackBar;

    instance.showSnackbarHandler();
    expect(ref).toBeCalled();
  });

  it('should be able to call handleSubmit', () => {
    const evt = { preventDefault() {} };
    const wrapper = shallow(<JoinUs />);
    const instance = wrapper.instance();

    wrapper.setState({ email: 'not@email' });
    wrapper.update();

    expect(wrapper.state().email).toBe('not@email');
    instance.handleSubmit(evt);
    expect(wrapper.state().email).toBe('');
  });
});
