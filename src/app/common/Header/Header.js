import React from 'react';
import './Header.scss';
import HeaderTop from './HeaderTop';
import HeaderMain from './HeaderMain';
import appConfig from '../../../config/appConfig';

const Header = props => {
  const { headerFooterVisibility } = props;
  const visible = headerFooterVisibility.value;
  const { contacts, links, pages, options } = appConfig.header;

  return (
    visible && (
      <header className="header">
        <HeaderTop contacts={contacts} links={links} />
        <HeaderMain pages={pages} options={options} />
      </header>
    )
  );
};

export default Header;
