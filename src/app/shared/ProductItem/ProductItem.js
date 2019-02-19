import React, { Component } from 'react';
import { bool } from 'prop-types';
import { Notify } from 'react-redux-notify';

import { productType } from '../../types';
import NotifyService from '../../../utils/notify.service';
import MaxItemDetails from './MaxItemDetails';

import './ProductItem.scss';

const CN = 'product-item';

const ViewFrontFull = props => {
  const { src, title, price } = props;

  return (
    <React.Fragment>
      <img className={`${CN}__img`} src={src} alt={title} />
      <h4>{title}</h4>
      <span className="highlighted">{`${price} $`}</span>
    </React.Fragment>
  );
};

const ViewCartSmall = props => {
  const { title, inCart, id } = props;

  const toggleCart = e => {
    const { removeFromCart, addToCart, createNotification } = props;

    e.preventDefault();
    const cb = !inCart ? addToCart : removeFromCart;

    if (!inCart) {
      createNotification(NotifyService.cartAdd);
    } else {
      createNotification(NotifyService.cartRemove);
    }

    cb(id);
  };

  const addToCartText = 'Add to cart';
  const rmFromCartText = 'Remove from cart';

  return (
    <div className="product-item--small__info">
      <h4>{title}</h4>
      <Notify position={NotifyService.position.topRight} />
      <button
        type="button"
        className="add-to-card"
        onClick={e => toggleCart(e, id)}
      >
        {!inCart ? (
          <span>
            <i className="fas fa-cart-plus" />
            {addToCartText}
          </span>
        ) : (
          <span>
            <i className="fas fa-cart-arrow-down" />
            {rmFromCartText}
          </span>
        )}
      </button>
    </div>
  );
};

const ViewInfoSmall = props => {
  const { title, price } = props;

  return (
    <div className="product-item--small__info">
      <h4>{title}</h4>
      <div className="info-group">
        <div className="rating">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
        <span className="highlighted price">{`${price} $`}</span>
      </div>
    </div>
  );
};

class ProductItem extends Component {
  static propTypes = {
    data: productType,
    extended: bool,
    isAddedToWishList: bool,
    isAddedToCart: bool
  };

  static defaultProps = {
    extended: false,
    isAddedToWishList: false,
    isAddedToCart: false,
    data: null
  };

  state = { showDetails: false };

  showFront = () => this.setState({ showDetails: false });

  showDetails = () => this.setState({ showDetails: true });

  render() {
    const { showDetails } = this.state;
    const {
      data,
      extended,
      isAddedToWishList,
      isAddedToCart,
      addToWishListItem,
      removeFromWishListItem,
      addToCart,
      removeFromCart,
      createNotification
    } = this.props;
    const { available, src, title, price, _id } = data;

    const fullItem = showDetails ? (
      <MaxItemDetails
        data={data}
        addToWishListItem={addToWishListItem}
        removeFromWishListItem={removeFromWishListItem}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        wished={isAddedToWishList}
        inCart={isAddedToCart}
        createNotification={createNotification}
      />
    ) : (
      <ViewFrontFull src={src} title={title} price={price} />
    );

    return extended ? (
      <div
        onMouseEnter={this.showDetails}
        onMouseLeave={this.showFront}
        className={
          available ? `${CN} ${CN}--full` : `${CN} ${CN}--full not-available`
        }
      >
        {available ? (
          fullItem
        ) : (
          <ViewFrontFull src={src} title={title} price={price} itemId={_id} />
        )}
      </div>
    ) : (
      <div
        className={`${CN} ${CN}--small`}
        onMouseEnter={this.showDetails}
        onMouseLeave={this.showFront}
      >
        <img src={src} alt="" />
        {showDetails ? (
          <ViewCartSmall
            id={_id}
            title={title}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            createNotification={createNotification}
            inCart={isAddedToCart}
          />
        ) : (
          <ViewInfoSmall title={title} price={price} />
        )}
      </div>
    );
  }
}

export default ProductItem;
