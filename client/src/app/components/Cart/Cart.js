import React from 'react';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import styles from './Cart.module.scss';
import appConfig from '../../../config/appConfig';
import ls from '../../../utils/localStorage.service';

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
  const cellHeadings = appConfig.cart.cellNames.map(head => (
    <h3 key={head}>{head}</h3>
  ));
  const displayedItems = productsInCart.map(item => (
    <CartItem
      key={item._id}
      item={item}
      createNotification={createNotification}
      removeFromCart={removeFromCart}
      updateCartItem={updateCartItem}
    />
  ));

  const handleClearCart = e => {
    e.preventDefault();
    clearCart();
    ls.setState('cart', { productsInCart: [] });
  };

  return (
    <section className="cart container">
      <div className={styles.block}>
        <div className={styles.columns}>{cellHeadings}</div>
        <div className={styles.items}>{displayedItems}</div>
      </div>
      <h3 className={styles.price_total}>{`Total: ${total.toFixed(2)}$`}</h3>
      <ul className={styles.order_list}>
        <li className={styles.list_item}>
          <Link
            to="/cart"
            className={styles.clear_btn}
            onClick={handleClearCart}
          >
            <i className="fa fa-times" />
            <span>clear cart</span>
          </Link>
        </li>
        <li className={styles.list_item}>
          <Link to="/checkout" className={styles.paypal_btn}>
            <i className={styles.logo} />
            <p className={styles.paypal_txt}>
              <span>Pay</span>
              <span>Pal</span>
            </p>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Cart;
