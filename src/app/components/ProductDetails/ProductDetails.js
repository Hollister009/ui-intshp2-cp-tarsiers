import React, { Component } from 'react';
import ProductDescription from '../ProductDescription/ProductDescription';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import Spinner from '../../shared/Spinner';

class ProductDetails extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { id, products, wishlist } = this.props;
    const item = products.find(el => el._id === id);

    return (
      <div className="container">
        {item ? (
          <React.Fragment>
            <ProductDescription item={item} />
            <RelatedProducts
              item={item}
              products={products}
              wishlist={wishlist}
              id={id}
            />
          </React.Fragment>
        ) : (
          <Spinner height="80vh" />
        )}
      </div>
    );
  }
}

export default ProductDetails;
