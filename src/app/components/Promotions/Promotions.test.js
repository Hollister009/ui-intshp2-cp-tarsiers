import React from 'react';
import { shallow } from 'enzyme';
import Promotions from './Promotions';

describe('<Promotions />', () => {
  it('should match its snapshot', () => {
    const props = { slides: [] };
    const wrapper = shallow(<Promotions {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
