import React from 'react';
import { shallow } from 'enzyme';
import NewArrivals from './NewArrivals';

describe('<NewArrivals />', () => {
  it('should match its snapshot', () => {
    const props = { products: [], extended: true };
    const wrapper = shallow(<NewArrivals {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
