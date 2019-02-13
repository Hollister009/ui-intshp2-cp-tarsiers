import React, { Component } from 'react';
import { Flags } from 'react-feature-flags';
import { Notify } from 'react-redux-notify';
import PropTypes from 'prop-types';
import productType from '../../../types';
import appConfig from '../../../config/appConfig';
import NotifyService from '../../../utils/notify.service';
import styles from './ProductDescription.module.scss';
import { addItem, removeItem } from '../../../utils/wishlist.service';

class ProductDescription extends Component {
  static propTypes = {
    item: productType,
    wished: PropTypes.bool,
    inCart: PropTypes.bool
  };

  addItem = addItem.bind(this);

  removeItem = removeItem.bind(this);

  static defaultProps = { item: null, wished: false, inCart: false };

  state = { quantity: 0, sizeClicked: '', heartDisabled: false };

  increment = () => {
    this.setState(prevState => ({ quantity: prevState.quantity + 1 }));
  };

  decrement = () => {
    const { quantity } = this.state;

    if (quantity > 0) {
      this.setState(prevState => ({ quantity: prevState.quantity - 1 }));
    }
  };

  toggleSizes = e => {
    e.preventDefault();

    this.setState({ sizeClicked: e.target.innerText.toLowerCase() });
  };

  toggleWishList = (e, id) => {
    const { wished } = this.props;

    e.preventDefault();
    const cb = !wished ? this.addItem : this.removeItem;

    this.setState({ heartDisabled: true }, () => {
      cb(id);
    });
  };

  toggleCart = (e, id) => {
    const {
      inCart,
      removeFromCart,
      addToCart,
      createNotification
    } = this.props;

    e.preventDefault();
    const cb = !inCart ? addToCart : removeFromCart;

    if (!inCart) {
      createNotification(NotifyService.cartAdd);
    } else {
      createNotification(NotifyService.cartRemove);
    }
    cb(id);
  };

  render() {
    const { item } = this.props;
    const { quantity, sizeClicked, heartDisabled } = this.state;

    if (!item) {
      return null;
    }

    const { _id, wished } = item;
    const price = quantity > 0 ? item.price * quantity : item.price;
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

    return (
      <section className={styles.section}>
        <div className={styles.preview} />
        <div className={styles.details}>
          <div className={styles.info}>
            <h1 className={styles.title}>{item.title}</h1>
            <h3 className={styles.subtitle}>
              {appConfig.productDescription.subheader}
            </h3>
            <p className={styles.text}>
              {appConfig.productDescription.description}
            </p>
          </div>
          <div className={styles.select}>
            <div className={styles.flex_row}>
              <p className={styles.choose}>Choose Size</p>
              <div className={styles.sizes}>{sizes}</div>
            </div>
            <div className={styles.flex_row}>
              <p className={styles.choose}>Choose Quantity</p>
              <div className={styles.quantity}>
                <button
                  type="button"
                  onClick={this.increment}
                  data-type="increment"
                >
                  &#43;
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  onClick={this.decrement}
                  data-type="decrement"
                >
                  &#45;
                </button>
              </div>
            </div>
          </div>
          <div className={styles.order}>
            <p className={styles.price}>{`Price: ${price}$`}</p>
            <div className={styles.buttons_row}>
              <button type="button">
                <i className="fas fa-globe" />
              </button>
              <Notify position={NotifyService.position.topRight} />
              <button
                type="button"
                title="Add to shopping-cart"
                onClick={e => this.toggleCart(e, _id)}
              >
                <i className="fas fa-cart-plus" />
              </button>
              <Flags authorizedFlags={[appConfig.killswitch.wishlist]}>
                <button
                  type="button"
                  onClick={e => this.toggleWishList(e, _id)}
                  title="Add to wish-list"
                  disabled={heartDisabled}
                >
                  <i className={wished ? 'fas fa-heart' : 'far fa-heart'} />
                </button>
              </Flags>
              <button type="button" className={styles.btn_order}>
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductDescription;
