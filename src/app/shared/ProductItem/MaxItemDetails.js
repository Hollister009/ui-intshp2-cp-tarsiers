/* eslint-disable no-console */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Flags } from 'react-feature-flags';
import PropTypes from 'prop-types';
import { createNotification, Notify } from 'react-redux-notify';

import HttpService from '../../../utils/http.service';
import appConfig from '../../../config/appConfig';
import productType from '../../../types';
import NotifyService from '../../../utils/Notify';

const { addToWishList, removeFromWishList } = appConfig.apiResources;

const CN = 'product-item--full';

class MaxItemDetails extends Component {
  static propTypes = {
    /**
     * data - productType shape
     */
    data: productType,
    addToWishListItem: PropTypes.func.isRequired,
    removeFromWishListItem: PropTypes.func.isRequired,
    wished: PropTypes.bool
  };

  static defaultProps = { data: null, wished: false };

  state = { heartDisabled: false };

  componentDidMount() {
    const { data } = this.props;

    this.setState({ image: data.src });
  }

  handleClick = () => {
    const { createNotification } = this.props;

    createNotification(NotifyService.success);
  };

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
    const { data } = this.props;
    const { _id, title, sizes, colors, colorUrls, wished } = data;
    const { heartDisabled, image } = this.state;
    const allSizes = sizes
      .map((size, i) => (i !== 0 ? `- ${size}` : size))
      .join(' ');
    const swatches = this.swatchesFactory(colors, colorUrls);

    return (
      data && (
        <React.Fragment>
          <img className={`${CN}__img-small`} src={image} alt="" />
          <h4 className="highlighted">{title}</h4>
          <div className={`${CN}__sizes`}>{`sizes : ${allSizes}`}</div>
          <div className={`${CN}__swatches`}>{swatches}</div>
          <hr className="separate" />
          <div className="social_buttons">
            <button type="button" title="Share with others">
              <i className="fas fa-share-alt" />
            </button>
            <Notify position={NotifyService.position.topRight} />
            <button
              type="button"
              title="Add to shopping-cart"
              onClick={this.handleClick.bind(this)}
            >
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

const mapDispatchToProps = dispatch => ({
  createNotification: config => {
    dispatch(createNotification(config));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(MaxItemDetails);
