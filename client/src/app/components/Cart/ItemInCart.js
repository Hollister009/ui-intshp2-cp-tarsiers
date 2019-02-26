import React, { Component } from 'react';
import { Notify } from 'react-redux-notify';
import NotifyService from '../../../utils/notify.service';
import styles from './Cart.module.scss';
import { productType } from '../../types';

class ItemInCart extends Component {
  static propTypes = {
    item: productType
  };

  static defaultProps = { item: null };

  state = { sizeClicked: '', activeColor: '', quantity: 1 };

  increment = item => {
    const { quantity } = this.state;
    const { createNotification } = this.props;

    if (quantity < item.quantity) {
      this.setState(prevState => ({ quantity: prevState.quantity + 1 }));
    } else {
      createNotification(NotifyService.limitQuantity);
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

  removeFromCartAction = e => {
    const { removeFromCart, createNotification, item } = this.props;

    e.preventDefault();
    removeFromCart(item);
    createNotification(NotifyService.cartRemove);
  };

  render() {
    const { sizeClicked, activeColor, quantity } = this.state;
    const { item } = this.props;
    const { _id } = item;
    const sizes = item.sizes.map((element, index, array) => {
      const active = sizeClicked === element ? { color: '#ff5912' } : {};

      return (
        <React.Fragment key={element}>
          <a
            href="/"
            className={styles.size}
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
          className={color === activeColor ? styles.active : styles.color}
          style={style}
          onClick={e => this.toggleColors(e)}
          onKeyDown={e => this.toggleColors(e)}
        >
          {color}
        </span>
      );
    });
    const quantityButtons = (
      <div className={styles.select_quantity}>
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
        <Notify position={NotifyService.position.topRight} />
        <div className={styles.cart_block}>
          <img src={item.src} alt={item.title} className={styles.item_image} />
          <div className={styles.item_title}>{item.title}</div>
          <div className={styles.select_colors}>{swatches}</div>
          <div className={styles.select_sizes}>{sizes}</div>
          <div>{`${item.price}$`}</div>
          <div>{quantityButtons}</div>
          <button
            type="button"
            className={styles.item_remove}
            onClick={e => this.removeFromCartAction(e, _id)}
          >
            <i className="far fa-trash-alt" />
          </button>
          <div className={styles.item_total}>{`${total}$`}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default ItemInCart;
