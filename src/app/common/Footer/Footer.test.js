import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
  it('should have headerFooterVisibility prop', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find({ prop: 'headerFooterVisibility' }));
  });
});
