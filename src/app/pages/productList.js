import React from 'react';
import HttpService from '../../utils/http.service';
import FilterAreaContainer from '../components/FilterArea/FilterAreaContainer';

const ProductsListPage = () => {
  const getFilteredProducts = (sizes, brands, category) => {
    const params = { sizes, brands, category };

    HttpService.get('/api/filtered-products', { params }).then(res =>
      console.log('res', res)
    );

    console.log('product list', sizes, brands, category);
  };

  return (
    <div>
      <FilterAreaContainer getFilteredProducts={getFilteredProducts} />
    </div>
  );
};

export default ProductsListPage;
