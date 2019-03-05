/* eslint-disable max-len */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { cartType } from '../../types/index';
import ItemInCart from './ItemInCart';
import styles from './Cart.module.scss';

class Cart extends Component {
  static propTypes = { cart: cartType.isRequired };

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

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
      setColor,
      setSize,
      setQuantityAndTotal,
      setCommonTotal
    } = this.props;
    const { productsInCart } = cart;
    const reflectItems = productsInCart.map(item => (
      <ItemInCart
        key={item._id}
        item={item}
        createNotification={createNotification}
        removeFromCart={removeFromCart}
        setColor={setColor}
        setSize={setSize}
        setQuantityAndTotal={setQuantityAndTotal}
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
        <React.Fragment>
          <div className={styles.empty_cart}>
            <Link to="/products">
              <img
                src="https://res.cloudinary.com/sofimat/image/upload/v1551793878/empty/cart.gif"
                alt="Empty cart"
                className={styles.cart_img}
              />
            </Link>
            <p>Your cart is empty! Please order something!</p>
            <img
              src="https://res.cloudinary.com/sofimat/image/upload/v1551793876/empty/click-here-gif-4.gif"
              alt="Click"
              className={styles.click_arrow}
            />
          </div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
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
          <div className={styles.order_buttons}>
            <button
              type="button"
              className={styles.clear_cart}
              onClick={e => this.clearCartHandler(e)}
            >
              Clear Cart
            </button>
            <div className={styles.total}>{`Total: ${total.toFixed(2)}$`}</div>
            <button type="button" className={styles.payPal_button}>
              <img
                src="https://res.cloudinary.com/so/image/upload/v1551187779/logos/rsz_1196566.png"
                alt="PayPal"
              />
              Checkout
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
