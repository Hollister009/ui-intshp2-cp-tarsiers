import React from 'react';
import { shallow } from 'enzyme';
import Snackbar from './Snackbar';

describe('<Snackbar />', () => {
  it('should match its snapshot', () => {
    const props = { isActive: false };
    const wrapper = shallow(<Snackbar {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
