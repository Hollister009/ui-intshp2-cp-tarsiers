import React, { Component } from 'react';

import { cartType } from '../../types/index';

class Cart extends Component {
  static propTypes = {
    cart: cartType.isRequired
  };

  componentDidMount = () => {};

  render() {
    const { cart } = this.props;
    const { productsIds } = cart;
    const item = productsIds.map((id, el) => id === el.id);

    return (
      <React.Fragment>
        <div className="cart-block">
          <img src={item.src} alt={item.title} />
          <div className="cart-info">
            <p>{`Title: ${item.title}`}</p>
            <p className="cart-size">{`Size: ${item.size}`}</p>
            <p>{`Quantity: ${item.quantity}`}</p>
            <p>{`Total price: ${item.price}$`}</p>
          </div>
        </div>
        ))
      </React.Fragment>
    );
  }
}

export default Cart;
