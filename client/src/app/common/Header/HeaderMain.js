import React, { Component } from 'react';
import { RouterLink } from '../Links';

import './Header.scss';
import logo from '../../../assets/logo.png';

class HeaderMain extends Component {
  state = { isHidden: true };

  navToggle = () => {
    const { innerWidth } = window;

    if (innerWidth < 768) {
      this.setState(prevState => ({ isHidden: !prevState.isHidden }));
    }
  };

  renderLinks = list =>
    list.map(link => {
      const { id, icon, href, desc, value } = link;
      const { cart } = this.props;
      const cartValue = cart.productsInCart.length;
      const headerIcon =
        desc === 'cart' ? (
          <div className="cart-icon">
            <span className="cart-icon__quantity">{cartValue}</span>
            <i className={icon} />
          </div>
        ) : (
          <i className={icon} />
        );

      return (
        <li key={id} className="navbar-link">
          <RouterLink href={href} onClick={this.navToggle}>
            {icon ? headerIcon : value}
          </RouterLink>
        </li>
      );
    });

  render() {
    const { isHidden } = this.state;
    const { pages, options } = this.props;
    const navItems = (
      <ul className="header-links">{this.renderLinks(pages)}</ul>
    );
    const userOptions = (
      <ul className="header-links">
        {this.renderLinks(options)}
        <button type="button" className="menu" onClick={this.navToggle}>
          <i className="fas fa-bars" />
        </button>
      </ul>
    );

    return (
      <div className="header-main container">
        <div className="header-logo col-2">
          <RouterLink href="/">
            <img src={logo} alt="logo" />
          </RouterLink>
        </div>
        <nav className="navbar col-10">
          <div className={!isHidden ? 'nav-toggle' : 'nav-main'}>
            {navItems}
          </div>
          <div className="header-nav-right col-3">{userOptions}</div>
        </nav>
      </div>
    );
  }
}

export default HeaderMain;
