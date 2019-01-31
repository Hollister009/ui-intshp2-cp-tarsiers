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
      filter,
      updateMinPrice,
      updateMaxPrice,
      toggleAvailability
    } = this.props;

    return (
      <div>
        <Categories
          setCategory={setCategory}
          getFilteredProducts={getFilteredProducts}
          filter={filter}
          toggleAvailability={toggleAvailability}
        />
        <PriceFilter
          updateMinPrice={updateMinPrice}
          updateMaxPrice={updateMaxPrice}
          minValue={filter.price.min}
          maxValue={filter.price.max}
        />
        <Sizes addSize={addSize} removeSize={removeSize} />
        <Brands addBrand={addBrand} removeBrand={removeBrand} />
      </div>
    );
  }
}

export default FilterArea;
