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

  increment = () => {
    const { quantity } = this.state;
    const { createNotification, setQuantityAndTotal, item } = this.props;
    const { _id } = item;
    const newQuantity = quantity + 1;

    if (quantity < item.quantity) {
      setQuantityAndTotal({ _id, newQuantity });
      this.setState(prevState => ({ quantity: prevState.quantity + 1 }));
    } else {
      createNotification(NotifyService.limitQuantity);
    }
  };

  decrement = () => {
    const { quantity } = this.state;
    const { setQuantityAndTotal, item } = this.props;
    const { _id } = item;
    const newQuantity = quantity - 1;

    if (quantity > 1) {
      setQuantityAndTotal({ _id, newQuantity });
      this.setState(prevState => ({ quantity: prevState.quantity - 1 }));
    }
  };

  toggleSizes = (e, size) => {
    e.preventDefault();
    const { setSize, item } = this.props;
    const { _id } = item;

    setSize({ _id, size });
    this.setState({ sizeClicked: size });
  };

  toggleColors = (e, color) => {
    e.preventDefault();
    const { setColor, item } = this.props;
    const { _id } = item;

    setColor({ _id, color });
    this.setState({ activeColor: color });
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
            onClick={e => this.toggleSizes(e, element)}
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
          onClick={e => this.toggleColors(e, color)}
          onKeyDown={e => this.toggleColors(e, color)}
        >
          {color}
        </span>
      );
    });
    const quantityButtons = (
      <div className={styles.select_quantity}>
        <button
          type="button"
          onClick={() => this.increment()}
          data-type="increment"
        >
          +
        </button>
        {quantity}
        <button
          type="button"
          onClick={() => this.decrement()}
          data-type="decrement"
        >
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
            data-type="remove-btn"
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
