import React, { Component } from 'react';
import './FilterArea.scss';
import Brands from './Brands';
import Sizes from './Sizes';
import Categories from './Categories';
import PriceFilter from './PriceFilter';

class FilterArea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      setCategory,
      addSize,
      removeSize,
      addBrand,
      removeBrand,
      getFilteredProducts,
      filter
    } = this.props;

    return (
      <div>
        <Categories
          setCategory={setCategory}
          getFilteredProducts={getFilteredProducts}
          filter={filter}
        />
        <PriceFilter />
        <Sizes addSize={addSize} removeSize={removeSize} />
        <Brands addBrand={addBrand} removeBrand={removeBrand} />
      </div>
    );
  }
}

export default FilterArea;
