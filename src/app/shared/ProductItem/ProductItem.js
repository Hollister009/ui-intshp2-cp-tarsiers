/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import { bool } from 'prop-types';

import productType from '../../types';
import HttpService from '../../../utils/http.service';
import appConfig from '../../../config/appConfig';
import { ViewFrontFull, ViewDetailsFull } from './viewFull';
import { ViewCartSmall, ViewInfoSmall } from './viewSmall';
import './ProductItem.scss';

const CN = 'product-item';
const { addToWishList, removeFromWishList } = appConfig.apiResources;

class ProductItem extends Component {
  static propTypes = {
    extended: bool,

    /**
     * data - productType shape
     */
    data: productType
  };

  static defaultProps = {
    extended: false,
    data: {}
  };

  constructor(props) {
    super(props);
    this.state = { showDetails: false, inWishList: null };
    this.itemRef = React.createRef();
  }

  showFront = () => this.setState({ showDetails: false });

  showDetails = () => this.setState({ showDetails: true });

  addToWishList = id => {
    const { addToWishListItem } = this.props;
    const { inWishList } = this.state;

    // HttpService.post(addToWishList, id)
    HttpService.post(addToWishList, { productId: id })
      .then(res => {
        if (res.status === 200 && !inWishList) {
          addToWishListItem(id);
        }
      })
      .catch(error => console.log(error));
    addToWishListItem(id);
    console.log(`Added to the WishList: ${id}`);
  };

  removeFromWishList = id => {
    const { removeFromWishListItem } = this.props;

    // HttpService.post(removeFromWishList, id)
    HttpService.post(removeFromWishList, { productId: id })
      .then(res => {
        if (res.status === 200) {
          removeFromWishListItem(id);
        }
      })
      .catch(error => console.log(error));
    console.log(`Removed from the WishList: ${id}`);
  };

  toggleWishList = (e, id) => {
    e.preventDefault();
    let { inWishList } = this.state;

    this.setState({ inWishList: !inWishList }, () => {
      inWishList = !inWishList;
      const cb = inWishList ? this.addToWishList : this.removeFromWishList;

      cb(id);
    });
  };

  render() {
    const { showDetails, inWishList } = this.state;
    const { data, extended } = this.props;
    const { src, title, price } = data;

    return extended ? (
      <div
        ref={this.itemRef}
        className={`${CN} ${CN}--full`}
        onMouseEnter={this.showDetails}
        onMouseLeave={this.showFront}
      >
        {showDetails ? (
          <ViewDetailsFull
            {...data}
            clickHandler={this.toggleWishList}
            wished={inWishList}
          />
        ) : (
          <ViewFrontFull {...data} />
        )}
      </div>
    ) : (
      <div
        ref={this.itemRef}
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
