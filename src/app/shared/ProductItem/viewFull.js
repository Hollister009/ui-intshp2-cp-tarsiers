/* eslint-disable no-console */
import React, { Component } from 'react';
import { Flags } from 'react-feature-flags';

import HttpService from '../../../utils/http.service';
import appConfig from '../../../config/appConfig';

const { addToWishList, removeFromWishList } = appConfig.apiResources;

const CN = 'product-item--full';

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

class ViewDetailsFull extends Component {
  state = { heartDisabled: false };

  static defaultProps = { wished: false };

  addItem = id => {
    const { addToWishListItem, wished } = this.props;

    HttpService.post(addToWishList, { productId: id })
      .then(res => {
        if (res.status === 200 && !wished) {
          addToWishListItem(id);
          console.log(`Added to the WishList: ${id}`);
        }
      })
      .catch(error => console.log(error))
      .finally(this.setState({ heartDisabled: false }));
  };

  removeItem = id => {
    const { removeFromWishListItem } = this.props;

    HttpService.post(removeFromWishList, { productId: id })
      .then(res => {
        if (res.status === 200) {
          removeFromWishListItem(id);
          console.log(`Removed from the WishList: ${id}`);
        }
      })
      .catch(error => console.log(error))
      .finally(this.setState({ heartDisabled: false }));
  };

  toggleWishList = (e, id) => {
    const { wished } = this.props;

    e.preventDefault();
    const cb = !wished ? this.addItem : this.removeItem;

    this.setState({ heartDisabled: true }, () => {
      cb(id);
    });
  };

  render() {
    const { _id, src, title, sizes, colors, wished } = this.props;
    const { heartDisabled } = this.state;
    const colorPins = colors.map(color => (
      <div key={color} style={{ backgroundColor: `${color}` }} />
    ));
    const allSizes = sizes
      .map((size, i) => (i !== 0 ? `- ${size}` : size))
      .join(' ');

    return (
      <React.Fragment>
        <img className={`${CN}__img-small`} src={src} alt="" />
        <h4 className="highlighted">{title}</h4>
        <div className={`${CN}__sizes`}>{`sizes : ${allSizes}`}</div>
        <div className={`${CN}__swatches`}>{colorPins}</div>
        <hr className="separate" />
        <div className="social_buttons">
          <button type="button" title="Share with others">
            <i className="fas fa-share-alt" />
          </button>
          <button type="button" title="Add to shopping-cart">
            <i className="fas fa-shopping-cart" />
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
                className={wished ? 'fas fa-heart highlighted' : 'fas fa-heart'}
              />
            </button>
          </Flags>
        </div>
      </React.Fragment>
    );
  }
}

export { ViewFrontFull, ViewDetailsFull };
