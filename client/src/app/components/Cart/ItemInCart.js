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

  state = { sizeClicked: '', activeColor: '' };

  increment = () => {
    const { createNotification, setQuantityAndTotal, item } = this.props;
    const { _id, chosenQuantity } = item;
    const newQuantity = chosenQuantity + 1;

    if (chosenQuantity < item.quantity) {
      setQuantityAndTotal({ _id, newQuantity });
    } else {
      createNotification(NotifyService.limitQuantity);
    }
  };

  decrement = () => {
    const { setQuantityAndTotal, item } = this.props;
    const { _id, chosenQuantity } = item;
    const newQuantity = chosenQuantity - 1;

    if (chosenQuantity > 1) {
      setQuantityAndTotal({ _id, newQuantity });
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
    const { sizeClicked, activeColor } = this.state;
    const { item } = this.props;
    const { _id, chosenQuantity } = item;
    const sizes = item.sizes.map((element, index, array) => {
      const active =
        sizeClicked === element
          ? `${styles.highlightedSize}`
          : `${styles.size}`;

      return (
        <React.Fragment key={element}>
          <a
            href="/"
            className={active}
            onClick={e => this.toggleSizes(e, element)}
            // style={active}
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
        {chosenQuantity}
        <button
          type="button"
          onClick={() => this.decrement()}
          data-type="decrement"
        >
          -
        </button>
      </div>
    );

    const total = (item.price * chosenQuantity).toFixed(2);

    return (
      <React.Fragment>
        <Notify position={NotifyService.position.topRight} />
        <div className={styles.cart_block}>
          <img src={item.src} alt={item.title} className={styles.item_image} />
          <h3 className={styles.item_title}>{item.title}</h3>
          <div className={styles.select_colors}>
            <div className={styles.scrollColor}>{swatches}</div>
          </div>
          <div className={styles.select_sizes}>
            <div className={styles.scrollSize}>{sizes}</div>
          </div>
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
