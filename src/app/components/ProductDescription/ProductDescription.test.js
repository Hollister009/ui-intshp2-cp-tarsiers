import React from 'react';
import { shallow } from 'enzyme';
import ProductDescription from './ProductDescription';

describe('<ProductDescription />', () => {
  it('should match its snapshot', () => {
    const wrapper = shallow(<ProductDescription />);

    expect(wrapper).toMatchSnapshot();
  });
});
