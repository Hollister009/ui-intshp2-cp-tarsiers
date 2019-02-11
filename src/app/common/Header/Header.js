import React from 'react';
import './Header.scss';
import HeaderTop from './HeaderTop';
import HeaderMain from './HeaderMain';
import appConfig from '../../../config/appConfig';

const Header = props => {
  const { headerFooterVisibility, cart } = props;
  const visible = headerFooterVisibility.value;
  const { contacts, links, pages, options } = appConfig.header;

  return (
    visible && (
      <header className="header">
        <HeaderTop contacts={contacts} links={links} />
        <HeaderMain pages={pages} options={options} cart={cart} />
      </header>
    )
  );
};

Header.defaultProps = {
  cart: {
    value: 0
  }
};

export default Header;
