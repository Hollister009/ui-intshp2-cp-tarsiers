/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import { bool } from 'prop-types';

import productType from '../../../types';
import MaxItemDetails from './MaxItemDetails';

import './ProductItem.scss';

const CN = 'product-item';

class ProductItem extends Component {
  static propTypes = {
    /**
     * data - productType shape
     */
    data: productType,
    extended: bool,
    isAddedtoWishList: bool
  };

  static defaultProps = {
    extended: false,
    isAddedtoWishList: false,
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
      isAddedtoWishList,
      addToWishListItem,
      removeFromWishListItem
    } = this.props;
    const { src, title, price } = data;

    return extended ? (
      <div
        className={`${CN} ${CN}--full`}
        onMouseEnter={this.showDetails}
        onMouseLeave={this.showFront}
      >
        {showDetails ? (
          <MaxItemDetails
            data={data}
            addToWishListItem={addToWishListItem}
            removeFromWishListItem={removeFromWishListItem}
            wished={isAddedtoWishList}
          />
        ) : (
          <ViewFrontFull src={src} title={title} price={price} />
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
          <ViewCartSmall title={title} />
        ) : (
          <ViewInfoSmall title={title} price={price} />
        )}
      </div>
    );
  }
}

const ViewFrontFull = props => {
  const { src, title, price } = props;

  return (
    <React.Fragment>
      <img className={`${CN}__img`} src={src} alt="" />
      <h4>{title}</h4>
      <span className="highlighted">{`${price} $`}</span>
    </React.Fragment>
  );
};

const ViewCartSmall = props => {
  const { title } = props;

  return (
    <div className="product-item--small__info">
      <h4>{title}</h4>
      <button type="button" className="add-to-card">
        <i className="fas fa-shopping-cart" />
        add to cart
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

export default ProductItem;
