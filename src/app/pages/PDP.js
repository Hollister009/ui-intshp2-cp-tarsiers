import React from 'react';
import ProductDetailsContainer from '../components/ProductDetails/ProductDetailsContainer';

const ProductDetailsPage = ({ match }) => (
  <div>
    <h3>{match.params.productId}</h3>
    <div className="container">
      <ProductDetailsContainer id={match.params.productId} />
    </div>
  </div>
);

export default ProductDetailsPage;
