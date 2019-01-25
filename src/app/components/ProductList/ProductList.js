import React, { Component } from 'react';
import ProductItem from '../../shared/ProductItem';

import './ProductList.scss';

let lastScrollY = 0;

export default class ProductList extends Component {
  heightRef = React.createRef();

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    // HttpService.get(appConfig.apiResources.products).then(res =>
    //   this.setState({ products: res })
    // );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    lastScrollY = window.scrollY;
    window.requestAnimationFrame(() => {
      this.heightRef.current.style.top = `${lastScrollY}px`;
    });
  };

  render() {
    console.log(this.props);
    const { products } = this.props;
    const list =
      products &&
      products.map(el => <ProductItem key={el._id} data={el} extended />);

    return (
      <div className="container">
        <div className="product_list__page">
          <div className="products" ref={this.heightRef}>
            <div className="product_list">{list}</div>
            <button type="button">
              <Dots />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const Dots = () => (
  <div className="dots">
    <i className="fas fa-circle" />
    <i className="fas fa-circle" />
    <i className="fas fa-circle" />
  </div>
);
