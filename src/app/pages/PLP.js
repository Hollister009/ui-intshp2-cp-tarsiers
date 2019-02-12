import React from 'react';
import HttpService from '../../utils/http.service';
import FilterAreaContainer from '../components/FilterArea/FilterAreaContainer';
import ProductListContainer from '../components/ProductList/ProductListContainer';
import JoinUs from '../components/JoinUs/JoinUs';

const ProductsListPage = () => {
  const getFilteredProducts = params =>
    HttpService.get('/api/filtered-products', params);

  return (
    <div className="container">
      <div className="products_filters">
        <FilterAreaContainer getFilteredProducts={getFilteredProducts} />
        <ProductListContainer getFilteredProducts={getFilteredProducts} />
      </div>
      <JoinUs />
    </div>
  );
};

export default ProductsListPage;
