/* eslint-disable no-console */
import React from 'react';
import HttpService from '../../utils/http.service';
import FilterAreaContainer from '../components/FilterArea/FilterAreaContainer';
import ProductListContainer from '../components/ProductList/ProductListContainer';
import JoinUs from '../components/JoinUs/JoinUs';

const ProductsListPage = () => {
  const getFilteredProducts = (sizes, brands, category) => {
    const params = { sizes, brands, category };

    HttpService.get('/api/filtered-products', { params }).then(res =>
      console.log('res', res)
    );

    console.log('product list', sizes, brands, category);
  };

  return (
    <div className="container">
      <div className="products_filters">
        <FilterAreaContainer getFilteredProducts={getFilteredProducts} />
        <ProductListContainer />
      </div>
      <JoinUs />
    </div>
  );
};

export default ProductsListPage;
