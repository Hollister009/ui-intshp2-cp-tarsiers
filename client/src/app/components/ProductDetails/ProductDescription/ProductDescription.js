import React, { Component } from 'react';
import { Flags } from 'react-feature-flags';
import { Notify } from 'react-redux-notify';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { productType } from '../../../types';
import appConfig from '../../../../config/appConfig';
import NotifyService from '../../../../utils/notify.service';
import { addItem, removeItem } from '../../../../utils/wishlist.service';

import styles from './ProductDescription.module.scss';

const CartButton = props => {
  const { inCart, item, addToCart, createNotification } = props;
  const cartAction = () => {
    if (!inCart) {
      addToCart(item);
      createNotification(NotifyService.cartAdd);
    }
  };

  return (
    <Link
      to={inCart ? '/cart' : `/products/${item._id}`}
      className={styles.btn_cart}
      onClick={cartAction}
      data-type="cart-btn"
    >
      <span className={inCart ? styles.btn_visible : styles.btn_invisible}>
        Go to Cart
      </span>
      <span className={!inCart ? styles.btn_visible : styles.btn_invisible}>
        Add to Cart
      </span>
    </Link>
  );
};

class ProductDescription extends Component {
  static propTypes = {
    item: productType,
    wished: PropTypes.bool,
    inCart: PropTypes.bool
  };

  static defaultProps = { item: null, wished: false, inCart: false };

  addItem = addItem.bind(this);

  removeItem = removeItem.bind(this);

  toggleWishList = (e, item) => {
    const { wished } = this.props;

    e.preventDefault();

    const cb = !wished ? this.addItem : this.removeItem;

    cb(item);
  };

  render() {
    const {
      item,
      wished,
      inCart,
      children,
      addToCart,
      createNotification
    } = this.props;

    if (!item) {
      return null;
    }

    const sizes = item.sizes.map((element, index, array) => (
      <React.Fragment key={element}>
        <span className={styles.size}>{element}</span>
        {index + 1 !== array.length ? <span>-</span> : null}
      </React.Fragment>
    ));
    const swatches = item.colors.map(color => {
      const style = { backgroundColor: `${color}` };

      return (
        <span key={color} className={styles.color} style={style}>
          {color}
        </span>
      );
    });

    return (
      <div className={styles.background}>
        <div className="container">
          <h1 className={styles.titlebig} id="test">
            {item.title}
          </h1>
          <section className={styles.section}>
            <div className={styles.preview}>{children}</div>
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
                  <p className={styles.choose}>Available sizes</p>
                  <div className={styles.sizes}>
                    <div className={styles.scrollBoxSize}>{sizes}</div>
                  </div>
                </div>
                <div className={styles.flex_row}>
                  <p className={styles.choose}>Available colors</p>
                  <div className={styles.colors}>
                    <div className={styles.scrollBoxColor}>{swatches}</div>
                  </div>
                </div>
                <div className={styles.flex_row}>
                  <p className={styles.choose}>Available quantity</p>
                  <div className={styles.quantity}>
                    <span>{item.quantity}</span>
                  </div>
                </div>
              </div>
              <div className={styles.order}>
                <p className={styles.price}>{`Price: ${item.price}$`}</p>
                <div className={styles.buttons_row}>
                  <button type="button" className={styles.iconButton}>
                    <i className="fas fa-globe" />
                  </button>
                  <Notify position={NotifyService.position.topRight} />
                  <div className={styles.iconButton}>
                    {inCart ? (
                      <i className="fas fa-cart-arrow-down highlighted" />
                    ) : (
                      <i className="fas fa-cart-plus" />
                    )}
                  </div>
                  <Flags authorizedFlags={[appConfig.killswitch.wishlist]}>
                    <button
                      type="button"
                      onClick={e => this.toggleWishList(e, item)}
                      title="Add to wish-list"
                      data-type="wishlist-btn"
                      className={styles.iconButton}
                    >
                      <i
                        className={
                          wished ? 'fas fa-heart highlighted' : 'fas fa-heart'
                        }
                      />
                    </button>
                  </Flags>
                  <CartButton
                    addToCart={addToCart}
                    item={item}
                    inCart={inCart}
                    createNotification={createNotification}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ProductDescription;
