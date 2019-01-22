import React, { Component } from 'react';
import HttpService from '../../../utils/http.service';
import ProductItem from '../../shared/ProductItem';
import appConfig from '../../../config/appConfig';

import './ProductList.scss';

const Dots = () => (
  <div className="dots">
    <i className="fas fa-circle" />
    <i className="fas fa-circle" />
    <i className="fas fa-circle" />
  </div>
);

export default class ProductList extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    HttpService.get(appConfig.apiResources.products).then(res =>
      this.setState({ products: res })
    );
  }

  render() {
    const { products } = this.state;
    const list =
      products &&
      products.map(el => <ProductItem key={el._id} data={el} extended />);

    return (
      <div className="container">
        <div className="product_list__page">
          <div className="filterContainer" />
          <div className="products">
            <div className="product_list">{list}</div>
            <Dots />
          </div>
        </div>
      </div>
    );
  }
}
