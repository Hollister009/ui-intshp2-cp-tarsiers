import { connect } from 'react-redux';
import React from 'react';

import './Header.scss';
import HeaderTop from './HeaderTop';
import HeaderMain from './HeaderMain';

const Header = props => {
  const { headerFooterVisibility } = props;
  const visible = headerFooterVisibility.value;

  return (
    visible && (
      <header className="header">
        <HeaderTop />
        <HeaderMain />
      </header>
    )
  );
};

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Header);
