import React from 'react';
import { Link } from 'react-router-dom';
import PayPalButton from '../../shared/PayPalButton';

import CartItem from './CartItem/CartItem';
import styles from './Cart.module.scss';
import appConfig from '../../../config/appConfig';

const Cart = props => {
  const {
    cart,
    clearCart,
    removeFromCart,
    updateCartItem,
    createNotification
  } = props;
  const { productsInCart } = cart;
  const total = productsInCart.reduce((totalSum, el) => totalSum + el.total, 0);
  const cellHeadings = appConfig.cartCellHeadings.map(head => (
    <h3 key={head}>{head}</h3>
  ));
  const displayedItems = productsInCart.map(item => (
    <CartItem
      key={item._id}
      item={item}
      styles={styles}
      createNotification={createNotification}
      removeFromCart={removeFromCart}
      updateCartItem={updateCartItem}
    />
  ));

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
        <div className={styles.cart_block}>{cellHeadings}</div>
        <div className={styles.item_in_cart}>{displayedItems}</div>
      </div>
      <h3 className={styles.price_total}>{`Total: ${total.toFixed(2)}$`}</h3>
      <div className={styles.order_buttons}>
        <button type="button" className={styles.clear_cart} onClick={clearCart}>
          clear cart
        </button>
        <PayPalButton />
      </div>
    </div>
  );
};

export default Cart;
