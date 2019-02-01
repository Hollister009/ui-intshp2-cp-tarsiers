import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';

jest.mock('react-router-dom');
describe('<Header />', () => {
  let props;

  beforeEach(() => {
    props = {
      headerFooterVisibility: { value: true }
    };
  });

  it('should match its snapshot', () => {
    const wrapper = shallow(<Header {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should able to render all child components', () => {
    const wrapper = mount(<Header {...props} />);

    expect(wrapper).toBeDefined();
  });

  it('should be able to render based on props', () => {
    const wrapper = mount(<Header {...props} />);

    expect(wrapper.prop('headerFooterVisibility').value).toBe(true);
    wrapper.setProps({ headerFooterVisibility: { value: false } });
    expect(wrapper.prop('headerFooterVisibility').value).toBe(false);
  });
});
