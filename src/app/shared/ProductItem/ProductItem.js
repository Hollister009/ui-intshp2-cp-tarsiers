import React, { Component } from 'react';

import HttpService from '../../../utils/http.service';
import appConfig from '../../../config/appConfig';
import { ViewFrontFull, ViewDetailsFull } from './viewFull';
import { ViewCartSmall, ViewInfoSmall } from './viewSmall';
import './ProductItem.scss';

const CN = 'product-item';

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = { showDetails: false, inWishList: false };
    this.itemRef = React.createRef();
  }

  showFront = () => this.setState({ showDetails: false });

  showDetails = () => this.setState({ showDetails: true });

  addToWishList = id => {
    console.log(`Added to the WishList: ${id}`);
    HttpService.post(appConfig.apiResources.wishList, { productId: id }).then(
      res => console.log('res', res)
    );
  };

  removeFromWishList = id => {
    console.log(`Removed from the WishList: ${id}`);
  };

  toggleWishList = (e, id) => {
    e.preventDefault();
    const { inWishList } = this.state;

    this.setState(state => ({ ...state, inWishList: !state.inWishList }));
    const cb = !inWishList ? this.addToWishList : this.removeFromWishList;

    console.log(inWishList);
    cb(id);
  };

  clickHandle = (e, id) => {
    e.preventDefault();

    HttpService.post(appConfig.apiResources.wishList, { productId: id }).then(
      res => console.log('res', res)
    );
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
