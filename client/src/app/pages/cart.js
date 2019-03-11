import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import appConfig from '../../config/appConfig';
import CartContainer from '../components/Cart/CartContainer';

import '../../styles/pages/cart.scss';

const CartPage = props => {
  const { cart } = props;
  const msg = 'Your cart is empty! Please order something!';

  if (cart.productsInCart.length === 0) {
    return (
      <section className="cart container">
        <h2 className="cart-msg">{msg}</h2>
        <Link to="/products">
          <img
            src={appConfig.imageRes.emptyCart}
            alt="Empty cart"
            className="cart-img"
          />
        </Link>
      </section>
    );
  }
  return <CartContainer />;
};

const mapStateToProps = state => ({ cart: state.cart });

export default connect(mapStateToProps)(CartPage);
