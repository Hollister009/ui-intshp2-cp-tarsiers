import React from 'react';
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
      createNotification={createNotification}
      removeFromCart={removeFromCart}
      updateCartItem={updateCartItem}
    />
  ));

  return (
    <section className="cart container">
      <div className={styles.block}>
        <div className={styles.columns}>{cellHeadings}</div>
        <div className={styles.items}>{displayedItems}</div>
      </div>
      <h3 className={styles.price_total}>{`Total: ${total.toFixed(2)}$`}</h3>
      <div className={styles.order_buttons}>
        <button type="button" className={styles.clear_btn} onClick={clearCart}>
          clear cart
        </button>
        <PayPalButton />
      </div>
    </section>
  );
};

export default Cart;
