import React, { Component } from 'react';
import './FilterArea.scss';
import Brands from './Brands';
import Sizes from './Sizes';
import Categories from './Categories';
import PriceRange from './PriceRange';

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
      removeBrand
    } = this.props;

    console.log(this.props);

    return (
      <div>
        <Categories setCategory={setCategory} />
        <PriceRange />
        <Sizes addSize={addSize} removeSize={removeSize} />
        <Brands addBrand={addBrand} removeBrand={removeBrand} />
      </div>
    );
  }
}

export default FilterArea;
