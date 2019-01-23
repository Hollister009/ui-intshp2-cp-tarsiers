import React from 'react';
import { shallow } from 'enzyme';
import HeaderTop from './HeaderTop';
import HeaderMain from './HeaderMain';

const links = [];
const contacts = [];

describe('<HeaderTop />', () => {
  it('should render links and contacts', () => {
    const wrapper = shallow(<HeaderTop links={links} contacts={contacts} />);

    expect(wrapper.props());
  });
});

const pages = [];
const options = [];

describe('<HeaderMain />', () => {
  it('should change the toggle pages and options', () => {
    const wrapper = shallow(<HeaderMain pages={pages} options={options} />);

    expect(wrapper.props());
  });
});
