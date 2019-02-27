import React, { Component } from 'react';
import NotifyService from '../../../utils/notify.service';
import { cartType } from '../../types/index';
import ItemInCart from './ItemInCart';
import styles from './Cart.module.scss';
import { element } from 'prop-types';

class Cart extends Component {
  static propTypes = {
    cart: cartType.isRequired
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  orderHandler = e => {
    e.preventDefault();
    const { item, orderNowItem, createNotification } = this.props;
    const { sizeClicked, quantity, activeColor } = this.state;
    const orderData = {
      title: item.title,
      size: sizeClicked,
      color: activeColor,
      price: item.price,
      total: item.price * quantity,
      quantity
    };

    if (sizeClicked && activeColor) {
      orderNowItem(orderData);
      createNotification(NotifyService.ordered);
    } else if (sizeClicked) {
      createNotification(NotifyService.chooseColor);
    } else {
      createNotification(NotifyService.chooseSize);
    }
  };

  render() {
    const {
      cart,
      createNotification,
      removeFromCart,
      setColor,
      setSize,
      setQuantityAndTotal
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
      (accumulator, el) => accumulator + el.total,
      0
    );

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
            <button type="button" className={styles.clear_cart}>
              Clear Cart
            </button>
            <div className={styles.total}>{`Total: ${total}$`}</div>
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
