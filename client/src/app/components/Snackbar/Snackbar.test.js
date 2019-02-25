import React from 'react';
import { shallow } from 'enzyme';
import Snackbar from './Snackbar';

describe('<Snackbar />', () => {
  const props = { isActive: false };

  it('should match its snapshot', () => {
    const wrapper = shallow(<Snackbar {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  setTimeout(() => {
    it('should check state status', () => {
      const wrapper = shallow(<Snackbar {...props} />);

      expect(wrapper.setState('isActive')).toBe(false);
    }, 3000);
  });
});
