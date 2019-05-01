import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import HeaderTop from './HeaderTop';
import HeaderMain from './HeaderMain';
import { productType } from '../../types';
import appConfig from '../../../config/appConfig';
import ls from '../../../utils/localStorage.service';

import './Header.scss';

class Header extends PureComponent {
  static propTypes = {
    cart: PropTypes.shape({
      productsInCart: PropTypes.arrayOf(productType)
    }).isRequired,
    toggleHFVisibility: PropTypes.shape({
      value: PropTypes.bool
    }).isRequired
  };

  componentDidUpdate() {
    const { cart } = this.props;

    // If cart state changed update localStorage record:
    ls.setState('cart', cart);
  }

  render() {
    const { toggleHFVisibility, cart } = this.props;
    const visible = toggleHFVisibility.value;
    const { contacts, links, pages, options } = appConfig.header;

    return (
      visible && (
        <header className="header">
          <HeaderTop contacts={contacts} links={links} />
          <HeaderMain pages={pages} options={options} cart={cart} />
        </header>
      )
    );
  }
}

export default Header;
