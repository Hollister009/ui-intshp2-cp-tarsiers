import React, { Component } from 'react';
import './FilterArea.scss';
import Brands from './Brands';
import Sizes from './Sizes';
import Categories from './Categories';
import PriceFilter from './PriceFilter';

class FilterArea extends Component {
  constructor(props) {
    super(props);
    this.state = { isFilterHidden: false };
  }

  componentDidMount = () => {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  };

  filterToggle = () => {
    this.setState(prevState => ({
      isFilterHidden: !prevState.isFilterHidden
    }));
  };

  updateDimensions = () => {
    if (window.innerWidth < 632) {
      this.setState({ isFilterHidden: true });
    } else {
      this.setState({ isFilterHidden: false });
    }
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateDimensions);
  };

  render() {
    const { isFilterHidden } = this.state;

    const {
      setCategory,
      addSize,
      removeSize,
      addBrand,
      removeBrand,
      filter,
      updateMinPrice,
      updateMaxPrice,
      toggleAvailability,
      updateFiltered
    } = this.props;

    const filterClass = isFilterHidden ? 'filter-area hide' : 'filter-area';

    return (
      <div>
        <button
          type="button"
          className="drop-filters"
          onClick={this.filterToggle}
        >
          <i className="fas fa-sliders-h" />
        </button>
        <div className={filterClass}>
          <Categories
            setCategory={setCategory}
            filter={filter}
            toggleAvailability={toggleAvailability}
            updateFiltered={updateFiltered}
          />
          <PriceFilter
            updateMinPrice={updateMinPrice}
            updateMaxPrice={updateMaxPrice}
            minValue={filter.price.min}
            maxValue={filter.price.max}
          />
          <Sizes addSize={addSize} removeSize={removeSize} filter={filter} />
          <Brands
            addBrand={addBrand}
            removeBrand={removeBrand}
            filter={filter}
          />
        </div>
      </div>
    );
  }
}

export default FilterArea;
