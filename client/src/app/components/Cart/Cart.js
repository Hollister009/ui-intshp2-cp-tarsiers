import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { cartType, productType } from '../../types/index';
import ItemInCart from './ItemInCart';
import styles from './Cart.module.scss';

class Cart extends Component {
  static propTypes = {
    cart: cartType.isRequired,
    products: PropTypes.arrayOf(productType)
  };

  static defaultProps = {
    products: []
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const { cart, products, createNotification } = this.props;
    const { productsIds } = cart;
    const itemsInCart = products.filter(el => productsIds.includes(el._id));
    const reflectItems = itemsInCart.map(item => (
      <ItemInCart
        key={item}
        item={item}
        createNotification={createNotification}
      />
    ));

    return (
      <React.Fragment>
        <div className="container">
          <div className={styles.cart_rows}>
            <div className={styles.cart_block}>
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
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
