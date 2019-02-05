/* eslint-disable max-len */
import React, { Component } from 'react';

import './ProductDescription.scss';

export default class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.size = '';
    this.quantity = 0;
  }

  componentDidMount = () => {};

  render() {
    return (
      <div className="container product-details">
        <div className="images" />
        <div className="product-description">
          <div className="product-text">
            <h1 className="product-header">Full Winter Kit</h1>
            <h3 className="product-subheader">
              Half Jacket + Skiny Trousers + Boot leather
            </h3>
            <p className="product-info">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum is simply dummy text of the printing and
              typesetting industry
            </p>
          </div>
          <div className="size-quantity">
            <div className="p-size">
              <p>Choose Size</p>
              <div className="sizes">
                <a href="null">S</a>
                <span>-</span>
                <a href="null">M</a>
                <span>-</span>
                <a href="null">L</a>
                <span>-</span>
                <a href="null">XL</a>
              </div>
            </div>
            <div className="p-quantity">
              <p>Choose Quantity</p>
              <div className="quantity">
                <button type="button">+</button>
                <span>{}</span>
                <button type="button">-</button>
              </div>
            </div>
          </div>
          <div className="order-section">
            <p>{`Price: ${this.p}$`}</p>
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
      </div>
    );
  }
}
