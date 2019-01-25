/* eslint-disable no-console */
import React from 'react';
import HttpService from '../../utils/http.service';
import FilterAreaContainer from '../components/FilterArea/FilterAreaContainer';
import ProductListContainer from '../components/ProductList/ProductListContainer';

const ProductsListPage = () => {
  const getFilteredProducts = (sizes, brands, category) => {
    const params = { sizes, brands, category };

    HttpService.get('/api/filtered-products', { params }).then(res =>
      console.log('res', res)
    );

    console.log('product list', sizes, brands, category);
  };

  return (
    <div className="plp-page container">
      <FilterAreaContainer getFilteredProducts={getFilteredProducts} />
      <ProductListContainer />
    </div>
  );
};

export default ProductsListPage;
