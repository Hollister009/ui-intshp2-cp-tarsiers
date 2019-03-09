import React from 'react';
import HttpService from '../../utils/http.service';
import FilterAreaContainer from '../components/FilterArea/FilterAreaContainer';
import ProductListContainer from '../components/ProductList/ProductListContainer';
import JoinUs from '../components/JoinUs/JoinUs';
import appConfig from '../../config/appConfig';

const { products } = appConfig.apiResources;

const ProductsListPage = () => {
  const getFilteredProducts = params => HttpService.get(products, params);

  return (
    <div className="container">
      <div className="products_filters">
        <FilterAreaContainer />
        <ProductListContainer getFilteredProducts={getFilteredProducts} />
      </div>
      <JoinUs />
    </div>
  );
};

export default ProductsListPage;
