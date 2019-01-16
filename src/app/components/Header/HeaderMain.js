import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import logo from '../../../assets/logo.png';

class HeaderMain extends Component {
  state = { isHidden: true };

  navToggle = () => {
    this.setState(prevState => ({ isHidden: !prevState.isHidden }));
  };

  render() {
    const { isHidden } = this.state;
    const navLinks = [
      { id: 0, val: 'Home', link: '/' },
      { id: 1, val: 'Products', link: '/products' },
      { id: 2, val: 'Hot Deals', link: '/hot-deals' },
      { id: 3, val: 'About', link: '/about' },
      { id: 4, val: 'Contact', link: '/contacts' }
    ];

    const navItems = navLinks.map(item => {
      const { id, link, val } = item;

      return (
        <li key={id} className="navbar-link">
          <Link to={link}>{val}</Link>
        </li>
      );
    });

    return (
      <div className="header-main container">
        <div className="header-logo col-2">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <nav className="navbar col-10">
          <div className={!isHidden ? 'nav-toggle' : 'nav-main'}>
            <ul className="header-links">{navItems}</ul>
          </div>
          <div className="header-nav-right col-3">
            <ul className="header-links">
              <li className="navbar-link">
                <a href="/">
                  <i className="fa fa-search" />
                </a>
              </li>
              <li className="navbar-link">
                <a href="/">
                  <i className="fa fa-user" />
                </a>
              </li>
              <li className="navbar-link">
                <a href="/">
                  <i className="fas fa-shopping-basket" />
                </a>
              </li>
              <button type="button" className="menu" onClick={this.navToggle}>
                <i className="fas fa-bars" />
              </button>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderMain;
