import React from 'react';
import { shallow, mount } from 'enzyme';

import ProductItem from './ProductItem';

const products = require('../../../mocks/products.json');

xdescribe('<ProductItem />', () => {
  let props;
  let extended;

  beforeEach(() => {
    extended = true;
    props = { data: products[1] };
  });

  it('should match its snapshot', () => {
    const shallowWrapper = shallow(<ProductItem {...props} />);

    expect(shallowWrapper).toMatchSnapshot();
  });

  xdescribe('<viewSmall />', () => {
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
  });

  xdescribe('<viewFull>', () => {
    it('should be able to render <ViewFrontFull />', () => {
      const wrapper = shallow(<ProductItem {...props} extended={extended} />);
      const instance = wrapper.instance();

      instance.showFront();
      expect(wrapper.state('showDetails')).toBe(false);
    });

    it('should be able to render <ViewDetailsFull />', () => {
      const wrapper = shallow(<ProductItem {...props} extended={extended} />);
      const instance = wrapper.instance();

      instance.showDetails();
      expect(wrapper.state('showDetails')).toBe(true);
    });

    it('should render <ViewDetailsFull /> if showDetails is true', () => {
      const wrapper = mount(<ProductItem {...props} extended={extended} />);

      wrapper.setState({ showDetails: true });
      expect(wrapper.state('showDetails')).toBe(true);
    });

    it('should handle click on wishlist button', () => {
      const wrapper = mount(<ProductItem {...props} extended={extended} />);

      wrapper.setProps({ isAddedtoWishList: true });
      wrapper.setState({ showDetails: true });
      wrapper.update();
      wrapper.find('.btn-heart').simulate('click');
    });
  });
});
