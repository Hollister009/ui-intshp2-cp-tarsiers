import React from 'react';
import ProductDetailsContainer from '../components/ProductDetails/ProductDetailsContainer';

const ProductDetailsPage = ({ match }) => (
  <div>
    <div className="container">
      <ProductDetailsContainer id={match.params.productId} />
    </div>
  </div>
);

export default ProductDetailsPage;
