import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Flags } from 'react-feature-flags';
import { Notify } from 'react-redux-notify';

import { productType } from '../../types';
import appConfig from '../../../config/appConfig';
import NotifyService from '../../../utils/notify.service';
import { addItem, removeItem } from '../../../utils/wishlist.service';

const ViewFrontFull = props => {
  const { src, title, price, styles } = props;

  return (
    <React.Fragment>
      <img className={styles.full__img} src={src} alt={title} />
      <h4>{title}</h4>
      <span className="highlighted">{`${price} $`}</span>
    </React.Fragment>
  );
};

class ViewDetailsFull extends Component {
  static propTypes = {
    data: productType,
    wished: PropTypes.bool,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    inCart: PropTypes.bool
  };

  static defaultProps = { data: null, wished: false, inCart: false };

  addItem = addItem.bind(this);

  removeItem = removeItem.bind(this);

  state = { heartDisabled: false };

  componentDidMount() {
    const { data } = this.props;

    this.setState({ image: data.src });
  }

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

  toggleSwatch = (e, colors) => {
    if (e.keyCode === 13 || e.type === 'click') {
      const value = e.target.innerText;

      this.setState({ image: colors[value] });
    }
  };

  swatchesFactory = (pins, items) =>
    pins.map(color => (
      <span
        key={color}
        role="button"
        tabIndex="0"
        style={{ backgroundColor: `${color}` }}
        onClick={e => this.toggleSwatch(e, items)}
        onKeyDown={e => this.toggleSwatch(e, items)}
      >
        {color}
      </span>
    ));

  render() {
    const { data, wished, inCart, styles } = this.props;
    const { _id, title, sizes, colors, colorUrls } = data;
    const { heartDisabled, image } = this.state;
    const allSizes = sizes
      .map((size, i) => (i !== 0 ? `- ${size}` : size))
      .join(' ');
    const swatches = this.swatchesFactory(colors, colorUrls);

    return (
      data && (
        <React.Fragment>
          <Link to={`/products/${_id}`}>
            <img
              className={styles.full__img_small}
              src={image}
              alt={data.title}
            />
            <h4 className="highlighted">{title}</h4>
          </Link>
          <div className={styles.full__sizes}>{`sizes : ${allSizes}`}</div>
          <div className={styles.full__swatches}>{swatches}</div>
          <hr className="separate" />
          <div className="social_buttons">
            <Notify position={NotifyService.position.topRight} />
            <button type="button" title="Share with others">
              <i className="fas fa-share-alt" />
            </button>
            <button
              type="button"
              title="Add to shopping-cart"
              onClick={e => this.toggleCart(e, _id)}
            >
              {!inCart ? (
                <i className="fas fa-cart-plus" />
              ) : (
                <i className="fas fa-cart-arrow-down highlighted" />
              )}
            </button>
            <Flags authorizedFlags={[appConfig.killswitch.wishlist]}>
              <button
                type="button"
                className="btn-heart"
                onClick={e => this.toggleWishList(e, _id)}
                title="Add to wish-list"
                disabled={heartDisabled}
              >
                <i
                  className={
                    wished ? 'fas fa-heart highlighted' : 'fas fa-heart'
                  }
                />
              </button>
            </Flags>
          </div>
        </React.Fragment>
      )
    );
  }
}

export { ViewFrontFull, ViewDetailsFull };
