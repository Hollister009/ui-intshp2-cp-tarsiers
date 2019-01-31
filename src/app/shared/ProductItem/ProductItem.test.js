import React from 'react';
import { shallow, mount } from 'enzyme';
import ProductItem from './ProductItem';

jest.mock('../../actions');
const products = require('../../../mocks/products.json');

describe('<ProductItem />', () => {
  let props;
  let extended;

  beforeEach(() => {
    extended = true;
    props = { data: products[1] };
  });

  it('should match its snapshot', () => {
    const wrapper = shallow(<ProductItem {...props} extended={extended} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to render <ViewCartSmall />', () => {
    const wrapper = shallow(<ProductItem {...props} />);
    const instance = wrapper.instance();

    instance.showFront();
    expect(wrapper.state('showDetails')).toBe(false);
  });

  it('should be able to render <ViewInfoSmall />', () => {
    const wrapper = shallow(<ProductItem {...props} />);
    const instance = wrapper.instance();

    instance.showDetails();
    expect(wrapper.state('showDetails')).toBe(true);
  });

  it('should render <ViewInfoSmall /> if showDetails is true', () => {
    const wrapper = mount(<ProductItem {...props} />);

    wrapper.setState({ showDetails: true });
    expect(wrapper.state('showDetails')).toBe(true);
  });

  it('should be able to render <ViewFrontFull />', () => {
    const wrapper = shallow(<ProductItem {...props} extended={extended} />);
    const instance = wrapper.instance();

    instance.showFront();
    expect(wrapper.state('showDetails')).toBe(false);
  });

  it('should render <ViewFrontFull /> when item is not available', () => {
    props = { data: products[0] };
    const wrapper = mount(<ProductItem {...props} extended={extended} />);
    const instance = wrapper.instance();

    instance.showFront();
    expect(wrapper.state('showDetails')).toBe(false);
  });
});
