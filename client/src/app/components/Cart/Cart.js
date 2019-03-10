/* eslint-disable max-len */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { cartType } from '../../types/index';
import PayPalButton from '../../shared/PayPalButton';

import ItemInCart from './ItemInCart';
import styles from './Cart.module.scss';
import appConfig from '../../../config/appConfig';

class Cart extends Component {
  // static propTypes = { cart: cartType.isRequired };

  clearCartHandler = e => {
    e.preventDefault();
    const { clearCart } = this.props;

    clearCart();
  };

  render() {
    const {
      cart,
      createNotification,
      removeFromCart,
      updateCartItem,
      setCommonTotal
    } = this.props;
    const { productsInCart } = cart;
    const reflectItems = productsInCart.map(item => (
      <ItemInCart
        key={item._id}
        item={item}
        createNotification={createNotification}
        removeFromCart={removeFromCart}
        updateCartItem={updateCartItem}
      />
    ));
    const styleHead = { borderBottom: 'none' };
    const total = productsInCart.reduce(
      (totalSum, el) => totalSum + el.total,
      0
    );

    if (cart.total !== total) {
      setCommonTotal(total);
    }
    if (productsInCart.length === 0) {
      return (
        <div className={styles.empty_cart}>
          <Link to="/products">
            <img
              src={appConfig.imageRes.emptyCart}
              alt="Empty cart"
              className={styles.cart_img}
            />
          </Link>
          <p>Your cart is empty! Please order something!</p>
          <img
            src={appConfig.imageRes.clickHere}
            alt="Click"
            className={styles.click_arrow}
          />
        </div>
      );
    }
    return (
      <div className="container">
        <div className={styles.cart_rows}>
          <div className={styles.cart_block} style={styleHead}>
            <h3>Product</h3>
            <h3>Title</h3>
            <h3>Color</h3>
            <h3>Size</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Remove</h3>
            <h3>Total</h3>
          </div>
          <div className={styles.item_in_cart}>{reflectItems}</div>
        </div>
        <h3 className={styles.price_total}>{`Total: ${total.toFixed(2)}$`}</h3>
        <div className={styles.order_buttons}>
          <button
            type="button"
            className={styles.clear_cart}
            onClick={e => this.clearCartHandler(e)}
          >
            clear cart
          </button>
          {/* <button type="button" className={styles.payPal_button}>
            <img
              src="https://res.cloudinary.com/so/image/upload/v1551187779/logos/rsz_1196566.png"
              alt="PayPal"
            />
            Checkout
          </button> */}
          <PayPalButton />
        </div>
      </div>
    );
  }
}

export default Cart;
