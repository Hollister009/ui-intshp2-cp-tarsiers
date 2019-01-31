/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import { bool } from 'prop-types';

import productType from '../../../types';
import { ViewFrontFull, ViewDetailsFull } from './viewFull';
import { ViewCartSmall, ViewInfoSmall } from './viewSmall';
import './ProductItem.scss';

const CN = 'product-item';

class ProductItem extends Component {
  static propTypes = {
    extended: bool,
    isAddedtoWishList: bool,

    /**
     * data - productType shape
     */
    data: productType
  };

  static defaultProps = {
    extended: false,
    isAddedtoWishList: false,
    data: {}
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
          <ViewDetailsFull
            {...data}
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

export default ProductItem;
