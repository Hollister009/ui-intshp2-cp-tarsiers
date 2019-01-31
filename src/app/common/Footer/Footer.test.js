import React from 'react';
import { shallow, mount } from 'enzyme';

import Footer from './Footer';

jest.mock('react-router-dom');
describe('<Footer />', () => {
  let props;

  beforeEach(() => {
    props = {
      headerFooterVisibility: { value: true }
    };
  });

  it('should match its snapshot', () => {
    const wrapper = shallow(<Footer {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to render based on props', () => {
    const wrapper = mount(<Footer {...props} />);

    expect(wrapper.prop('headerFooterVisibility').value).toBe(true);
    wrapper.setProps({ headerFooterVisibility: { value: false } });
    expect(wrapper.prop('headerFooterVisibility').value).toBe(false);
  });
});
