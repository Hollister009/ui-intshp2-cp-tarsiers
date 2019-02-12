/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React, { Component } from 'react';
import appConfig from '../../../config/appConfig';

import './ProductDescription.scss';

export default class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 0 };
  }

  increment = () => {
    this.setState(prevState => ({ quantity: prevState.quantity + 1 }));
  };

  decrement = () => {
    const { quantity } = this.state;

    if (quantity > 0) {
      this.setState(prevState => ({ quantity: prevState.quantity - 1 }));
    }
  };

  render() {
    const { item } = this.props;
    const { quantity } = this.state;

    if (!item) {
      return null;
    }
    const price = quantity > 0 ? item.price * quantity : item.price;
    const sizes = item.sizes.map((el, index, array) => (
      <React.Fragment>
        <a className="size" href="#">
          {el}
        </a>
        {index + 1 !== array.length ? <span>-</span> : null}
      </React.Fragment>
    ));

    return (
      <div className="product-description">
        <div className="product-text">
          <h1 className="product-header">{item.title}</h1>
          <h3 className="product-subheader">
            {appConfig.productDescription.subheader}
          </h3>
          <p className="product-info">
            {appConfig.productDescription.description}
          </p>
        </div>
        <div className="size-quantity">
          <div className="p-size">
            <p className="choose">Choose Size</p>
            <div className="sizes">{sizes}</div>
          </div>
          <div className="p-quantity">
            <p className="choose">Choose Quantity</p>
            <div className="quantity">
              <button type="button" onClick={this.increment}>
                +
              </button>
              <span>{quantity}</span>
              <button type="button" onClick={this.decrement}>
                -
              </button>
            </div>
          </div>
        </div>
        <div className="order-section">
          <p className="price">{`Price: ${price}$`}</p>
          <div className="order-buttons">
            <button type="button">
              <i className="fas fa-globe" />
            </button>
            <button type="button">
              <i className="fas fa-cart-plus" />
            </button>
            <button type="button">
              <i className="far fa-heart" />
            </button>
            <button type="button" className="order-now">
              Order Now
            </button>
          </div>
        </div>
      </div>
    );
  }
}
