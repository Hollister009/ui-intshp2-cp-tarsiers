import React from 'react';
import { shallow } from 'enzyme';
import HeaderTop from './HeaderTop';
import HeaderMain from './HeaderMain';

const links = ['link1', 'link2'];
const contacts = ['contact1', 'contact2'];

describe('<HeaderTop />', () => {
  it('should render links and contacts', () => {
    const wrapper = shallow(<HeaderTop links={links} contacts={contacts} />);

    expect(wrapper.props());
  });
});

const pages = ['page1', 'page2'];
const options = ['option1', 'option2'];

describe('<HeaderMain />', () => {
  it('should change the toggle pages and options', () => {
    const wrapper = shallow(<HeaderMain pages={pages} options={options} />);

    expect(wrapper.props());
  });
});
