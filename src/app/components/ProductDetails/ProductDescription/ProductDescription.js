import React, { Component } from 'react';
import { Flags } from 'react-feature-flags';
import { Notify } from 'react-redux-notify';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { productType } from '../../../types';
import appConfig from '../../../../config/appConfig';
import NotifyService from '../../../../utils/notify.service';
import { addItem, removeItem } from '../../../../utils/wishlist.service';

import styles from './ProductDescription.module.scss';

const CartButton = props => {
  const { inCart, item, addToCart, createNotification } = props;
  const { _id } = item;
  const cartAction = (e, id) => {
    e.preventDefault();
    addToCart(id);
    createNotification(NotifyService.cartAdd);
  };

  return !inCart ? (
    <button
      type="button"
      className={styles.btn_order}
      onClick={e => cartAction(e, _id)}
    >
      Add to Cart
    </button>
  ) : (
    <Link to="/cart" type="button" className={styles.btn_order}>
      Go to Cart
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

  toggleWishList = (e, id) => {
    const { wished } = this.props;

    e.preventDefault();

    const cb = !wished ? this.addItem : this.removeItem;

    cb(id);
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

    const { _id } = item;
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
                  <div className={styles.sizes}>{sizes}</div>
                </div>
                <div className={styles.flex_row}>
                  <p className={styles.choose}>Available colors</p>
                  <div className={styles.colors}>{swatches}</div>
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
                  <div data-type="cart-btn" className={styles.iconButton}>
                    {inCart ? (
                      <i className="fas fa-cart-arrow-down highlighted" />
                    ) : (
                      <i className="fas fa-cart-plus" />
                    )}
                  </div>
                  <Flags authorizedFlags={[appConfig.killswitch.wishlist]}>
                    <button
                      type="button"
                      onClick={e => this.toggleWishList(e, _id)}
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
