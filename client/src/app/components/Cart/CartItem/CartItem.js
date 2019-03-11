import React, { Component } from 'react';
import { Notify } from 'react-redux-notify';
import NotifyService from '../../../../utils/notify.service';
import { productType } from '../../../types';
import CartItemView from './CartItemView';

import styles from './CartItem.module.scss';

class CartItem extends Component {
  static propTypes = { item: productType };

  static defaultProps = { item: null };

  constructor(props) {
    super(props);
    this.item = props.item;
    this.state = {
      chosenColor: this.item.chosenColor,
      chosenSize: this.item.chosenSize,
      chosenQuantity: this.item.chosenQuantity,
      total: this.item.price
    };
  }

  increment = () => {
    const { _id, price } = this.item;
    const { updateCartItem } = this.props;

    this.setState(
      state => ({
        chosenQuantity: state.chosenQuantity + 1,
        total: (state.chosenQuantity + 1) * price
      }),
      () => {
        const newItem = { ...this.item, ...this.state };

        updateCartItem({ _id, newItem });
      }
    );
  };

  decrement = () => {
    const { _id, price } = this.item;
    const { updateCartItem } = this.props;
    const { chosenQuantity } = this.state;

    if (chosenQuantity > 1) {
      this.setState(
        state => ({
          chosenQuantity: state.chosenQuantity - 1,
          total: (state.chosenQuantity - 1) * price
        }),
        () => {
          const newItem = { ...this.item, ...this.state };

          updateCartItem({ _id, newItem });
        }
      );
    }
  };

  toggleSizes = (e, size) => {
    e.preventDefault();
    const { _id } = this.item;
    const { updateCartItem } = this.props;

    this.setState({ chosenSize: size }, () => {
      const newItem = { ...this.item, ...this.state };

      updateCartItem({ _id, newItem });
    });
  };

  toggleColors = color => {
    const { _id } = this.item;
    const { updateCartItem } = this.props;

    this.setState({ chosenColor: color }, () => {
      const newItem = { ...this.item, ...this.state };

      updateCartItem({ _id, newItem });
    });
  };

  itemRemove = () => {
    const { removeFromCart, createNotification } = this.props;

    removeFromCart(this.item);
    createNotification(NotifyService.cartRemove);
  };

  renderSizes = () => {
    const { chosenSize } = this.state;

    return this.item.sizes.map((element, index, array) => {
      const active =
        element === chosenSize ? `${styles.highlightedSize}` : `${styles.size}`;

      return (
        <React.Fragment key={element}>
          <a
            href="/"
            className={active}
            onClick={e => this.toggleSizes(e, element)}
          >
            {element}
          </a>
          {index + 1 !== array.length ? <span>-</span> : null}
        </React.Fragment>
      );
    });
  };

  renderColors = () => {
    const { chosenColor } = this.state;

    return this.item.colors.map(color => {
      const style = { backgroundColor: `${color}` };

      return (
        <span
          key={color}
          role="button"
          tabIndex="0"
          className={color === chosenColor ? styles.active : styles.color}
          style={style}
          onClick={() => this.toggleColors(color)}
          onKeyDown={() => this.toggleColors(color)}
        >
          {color}
        </span>
      );
    });
  };

  renderQuantity = () => {
    const { chosenQuantity } = this.state;

    return (
      <React.Fragment>
        <button type="button" onClick={this.increment} data-type="increment">
          +
        </button>
        {chosenQuantity}
        <button type="button" onClick={this.decrement} data-type="decrement">
          -
        </button>
      </React.Fragment>
    );
  };

  render() {
    const { total } = this.state;

    return (
      <React.Fragment>
        <Notify position={NotifyService.position.topRight} />
        <CartItemView
          item={this.item}
          total={total}
          styles={styles}
          sizes={this.renderSizes()}
          colors={this.renderColors()}
          quantity={this.renderQuantity()}
          itemRemove={this.itemRemove}
        />
      </React.Fragment>
    );
  }
}

export default CartItem;
