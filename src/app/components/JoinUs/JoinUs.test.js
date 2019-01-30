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

  xit('should be able to call showSnackbarHandler with message', () => {
    const wrapper = mount(<JoinUs />);
    // const spy = jest.spyOn(wrapper.instance(), 'showSnackbarHandler');

    wrapper.find('[type="submit"]').simulate('click');
    expect(wrapper.ref('snackbarRef'));
  });
});
