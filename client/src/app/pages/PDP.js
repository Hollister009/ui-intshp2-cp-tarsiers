import React from 'react';
import ProductDetailsContainer from '../components/ProductDetails/ProductDetailsContainer';
import JoinUs from '../components/JoinUs/JoinUs';

const ProductDetailsPage = ({ match }) => (
  <React.Fragment>
    <ProductDetailsContainer id={match.params.productId} />
    <JoinUs />
  </React.Fragment>
);

export default ProductDetailsPage;
