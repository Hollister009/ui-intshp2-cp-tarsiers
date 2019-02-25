import React, { Component } from 'react';
import { Notify } from 'react-redux-notify';

import { cartType } from '../../types/index';
import NotifyService from '../../../utils/notify.service';
import './Cart.scss';

class Cart extends Component {
  static propTypes = {
    cart: cartType.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { sizeClicked: '', activeColor: '', quantity: 1 };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  increment = (item, id) => {
    const { quantity } = this.state;
    const { createNotification } = this.props;

    if (id) {
      if (quantity < item.quantity) {
        this.setState(prevState => ({ quantity: prevState.quantity + 1 }));
      } else {
        createNotification(NotifyService.limitQuantity);
      }
    }
  };

  decrement = () => {
    const { quantity } = this.state;

    if (quantity > 1) {
      this.setState(prevState => ({ quantity: prevState.quantity - 1 }));
    }
  };

  toggleSizes = e => {
    e.preventDefault();

    this.setState({ sizeClicked: e.target.innerText.toLowerCase() });
  };

  toggleColors = e => {
    e.preventDefault();

    this.setState({ activeColor: e.target.innerText });
  };

  render() {
    const { sizeClicked, activeColor, quantity } = this.state;
    const { cart, products } = this.props;
    const { productsIds } = cart;
    const itemsInCart = products.filter(el => productsIds.includes(el._id));
    const itemsInCartList = itemsInCart.map(item => {
      const sizes = item.sizes.map((element, index, array) => {
        const active = sizeClicked === element ? { color: '#ff5912' } : {};

        return (
          <React.Fragment key={element}>
            <a
              href="/"
              className="size"
              onClick={e => this.toggleSizes(e)}
              style={active}
            >
              {element}
            </a>
            {index + 1 !== array.length ? <span>-</span> : null}
          </React.Fragment>
        );
      });
      const swatches = item.colors.map(color => {
        const style = { backgroundColor: `${color}` };

        return (
          <span
            key={color}
            role="button"
            tabIndex="0"
            className={color === activeColor ? 'active' : 'color'}
            style={style}
            onClick={e => this.toggleColors(e)}
            onKeyDown={e => this.toggleColors(e)}
          >
            {color}
          </span>
        );
      });
      const quantityButtons = (
        <div className="select-quantity">
          <button type="button" onClick={() => this.increment(item)}>
            +
          </button>
          {quantity}
          <button type="button" onClick={() => this.decrement()}>
            -
          </button>
        </div>
      );

      const total = (item.price * quantity).toFixed(2);

      return (
        <React.Fragment>
          <div className="cart-block">
            <img
              src={item.src}
              alt={item.title}
              className="item-image justify-self"
            />
            <p className="item-title justify-self">{item.title}</p>
            <p className="select-colors justify-self">{swatches}</p>
            <p className="select-sizes justify-self">{sizes}</p>
            <p className="justify-self">{`${item.price}$`}</p>
            <p className="justify-self">{quantityButtons}</p>
            <button type="button" className="item-remove justify-self">
              <i className="far fa-trash-alt" />
            </button>
            <p className="item-total justify-self">{`${total}$`}</p>
          </div>
        </React.Fragment>
      );
    });

    return (
      <React.Fragment>
        <div className="container">
          <div className="cartRows">
            <Notify position={NotifyService.position.topRight} />
            <div className="cart-block">
              <h3>Product</h3>
              <h3>Title</h3>
              <h3>Color</h3>
              <h3>Size</h3>
              <h3>Price</h3>
              <h3>Quantity</h3>
              <h3>Remove</h3>
              <h3>Total</h3>
            </div>
            <div className="item-in-cart">{itemsInCartList}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
