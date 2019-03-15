import React, { Component } from 'react';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';

import { productType } from '../../types';
import { ViewFrontFull, ViewDetailsFull } from './ExtendedDetails';
import { ViewCartSmall, ViewInfoSmall } from './ItemSmall';

import styles from './ProductItem.module.scss';

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
    const { src, title, price } = data;

    const fullItem = showDetails ? (
      <ViewDetailsFull
        data={data}
        styles={styles}
        addToWishListItem={addToWishListItem}
        removeFromWishListItem={removeFromWishListItem}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        wished={isAddedToWishList}
        inCart={isAddedToCart}
        createNotification={createNotification}
      />
    ) : (
      <ViewFrontFull styles={styles} src={src} title={title} price={price} />
    );

    return extended ? (
      <div
        className={styles.full}
        onMouseEnter={this.showDetails}
        onMouseLeave={this.showFront}
      >
        {fullItem}
      </div>
    ) : (
      <div
        className={styles.small}
        onMouseEnter={this.showDetails}
        onMouseLeave={this.showFront}
      >
        <Link to={`/products/${data._id}`}>
          <img src={src} alt="" className="small-pi-image" />
        </Link>
        {showDetails ? (
          <ViewCartSmall
            data={data}
            styles={styles}
            title={title}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            createNotification={createNotification}
            inCart={isAddedToCart}
          />
        ) : (
          <ViewInfoSmall styles={styles} title={title} price={price} />
        )}
      </div>
    );
  }
}

export default ProductItem;
