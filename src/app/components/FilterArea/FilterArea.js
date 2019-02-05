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

  applyChanges = () => {
    const {
      getFilteredProducts,
      updateFiltered,
      updateSkip,
      updateLimit
    } = this.props;

    const { filter } = this.props;
    const { sizes, brands, price, available, category } = filter;

    updateSkip(0);
    updateLimit(6);

    const { skip, limit } = filter;
    const params = { sizes, brands, price, available, skip, limit, category };

    params.skip = 0;
    params.limit = 6;
    getFilteredProducts({ params }).then(res => updateFiltered(res.data));
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
      getFilteredProducts,
      filter,
      updateMinPrice,
      updateMaxPrice,
      toggleAvailability,
      updateFiltered,
      updateLimit,
      updateSkip
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
            getFilteredProducts={getFilteredProducts}
            filter={filter}
            toggleAvailability={toggleAvailability}
            updateFiltered={updateFiltered}
            updateSkip={updateSkip}
            updateLimit={updateLimit}
          />
          <PriceFilter
            updateMinPrice={updateMinPrice}
            updateMaxPrice={updateMaxPrice}
            minValue={filter.price.min}
            maxValue={filter.price.max}
          />
          <Sizes addSize={addSize} removeSize={removeSize} />
          <Brands addBrand={addBrand} removeBrand={removeBrand} />
          <button
            type="button"
            onClick={this.applyChanges}
            className="apply-changes-button filter-block"
          >
            Apply changes
          </button>
        </div>
      </div>
    );
  }
}

export default FilterArea;
