import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './index';

describe('<Spinner />', () => {
  it('should match its snapshot', () => {
    const wrapper = shallow(<Spinner />);

    expect(wrapper).toMatchSnapshot();
  });
  it('should renders without crashing', () => {
    expect(shallow(<Spinner />).length).toEqual(1);
  });
});
