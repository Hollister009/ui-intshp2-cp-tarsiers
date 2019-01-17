import React, { Component } from 'react';
import { DisplayFront, DisplayDetails } from './ProductDisplay';
import HttpService from '../../../utils/http.service';
import appConfig from '../../../config/appConfig';
import styles from './ProductItem.module.scss';
import '../WishList/WishListContainer.scss';

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = { showDetails: false, activeItem: false };
    this.itemRef = React.createRef();
  }

  onHoverItem = () =>
    this.setState(state => ({ activeItem: !state.activeItem }));

  showFront = () => this.setState({ showDetails: false });

  showDetails = () => this.setState({ showDetails: true });

  addToWishList = (e, id) => {
    e.preventDefault();
    HttpService.post(appConfig.apiResources.addToWishList, {
      productId: id
    }).then(res => console.log('res add 2 wl', res));
  };

  removeFromWishList = (e, id) => {
    e.preventDefault();
    HttpService.post(appConfig.apiResources.removeFromWishList, {
      productId: id
    }).then(res => console.log('res del from wl', res));
  };

  componentDidMount = () => {
    const { updateTranslateStep } = this.props;

    updateTranslateStep(this.itemRef.current.offsetWidth + 30);
  };

  render() {
    const { data, extended } = this.props;
    const { showDetails, activeItem } = this.state;
    const cardView = showDetails ? (
      <DisplayDetails
        {...data}
        addToWishList={this.addToWishList}
        removeFromWishList={this.removeFromWishList}
      />
    ) : (
      <DisplayFront {...data} />
    );

    return extended ? (
      <div
        ref={this.itemRef}
        className={styles.product_card}
        onMouseEnter={this.showDetails}
        onMouseLeave={this.showFront}
      >
        {cardView}
      </div>
    ) : (
      <div
        ref={this.itemRef}
        className="item"
        onMouseEnter={this.onHoverItem}
        onMouseLeave={this.onHoverItem}
      >
        <div className="item-pic">
          <img src={data.src} alt="pic" />
        </div>
        <div className="item-info">
          <b>{data.title}</b>
          {activeItem ? (
            <div>
              <button type="button" className="add-to-card">
                <i className="fas fa-shopping-cart" />
                add to cart
              </button>
            </div>
          ) : (
            <div>
              <div className="stars">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <span className="price">{`${data.price} $`}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProductItem;
