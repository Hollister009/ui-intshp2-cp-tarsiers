/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bool } from 'prop-types';
import { createNotification, Notify } from 'react-redux-notify';

import productType from '../../../types';
import MaxItemDetails from './MaxItemDetails';
import NotifyService from '../../../utils/notify';

import './ProductItem.scss';

const CN = 'product-item';

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

// handleClick() {
//   const { createNotification } = this.props;

//   createNotification(NotifyService.info);
// }

const handleClick = props => {
  const { createNotification } = props;

  createNotification(NotifyService.info);
  console.log('click');
};

const ViewCartSmall = props => {
  const { title } = props;

  // class ViewCartSmall extends Comment {
  //   handleClick() {
  //     const { createNotification } = this.props;

  //     createNotification(NotifyService.info);
  //   }

  //   constructor(props) {
  //     super(props);
  //     this.state = { title: this.title };
  //   }
  // render() {

  return (
    <div className="product-item--small__info">
      <h4>{title}</h4>
      <Notify position={NotifyService.position.topRight} />
      <button type="button" className="add-to-card" onClick={handleClick}>
        <i className="fas fa-shopping-cart" />
        add to cart
      </button>
    </div>
  );
};
// }

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
    const { available, src, title, price } = data;

    const fullItem = showDetails ? (
      <MaxItemDetails
        data={data}
        addToWishListItem={addToWishListItem}
        removeFromWishListItem={removeFromWishListItem}
        wished={isAddedtoWishList}
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

const mapDispatchToProps = dispatch => ({
  createNotification: config => {
    dispatch(createNotification(config));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(ProductItem);
