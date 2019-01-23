import { connect } from 'react-redux';
import React from 'react';

import './Header.scss';
import HeaderTop from './HeaderTop';
import HeaderMain from './HeaderMain';
import appConfig from '../../../config/appConfig';

const Header = props => {
  const { headerFooterVisibility } = props;
  const visible = headerFooterVisibility.value;
  const { contacts, links, pages, options, key } = appConfig.header;

  return (
    visible && (
      <header className="header">
        <HeaderTop contacts={contacts} links={links} key={key} />
        <HeaderMain pages={pages} options={options} />
      </header>
    )
  );
};

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Header);
