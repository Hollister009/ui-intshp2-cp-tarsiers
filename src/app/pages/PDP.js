import React from 'react';
import ProductDetailsContainer from '../components/ProductDetails/ProductDetailsContainer';

const ProductDetailsPage = ({ match }) => (
  <ProductDetailsContainer id={match.params.productId} />
);

export default ProductDetailsPage;
