import React from 'react';
import { shallow } from 'enzyme';
import AdvertisingArea from './index';

xdescribe('<Advertising />', () => {
  it('should match its snapshot', () => {
    const wrapper = shallow(<AdvertisingArea />);

    expect(wrapper).toMatchSnapshot();
  });

  const props = { htmlSnippet: '' };

  it('should renders without crashing', () => {
    expect(shallow(<index {...props} />).length).toEqual(1);
  });
});
