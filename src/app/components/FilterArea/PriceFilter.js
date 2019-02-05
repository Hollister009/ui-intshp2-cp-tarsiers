/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import appConfig from '../../../config/appConfig';

class PriceFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minRangeValue: appConfig.filter.price.min,
      maxRangeValue: appConfig.filter.price.max
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e, min) {
    const { minValue, maxValue, updateMinPrice, updateMaxPrice } = this.props;
    let inputValue = parseInt(e.target.value, 10);
    const { minRangeValue, maxRangeValue } = this.state;

    if (+inputValue !== inputValue) return;

    if (inputValue < minRangeValue) {
      inputValue = minRangeValue;
    } else if (inputValue > maxRangeValue) {
      inputValue = maxRangeValue;
    }

    if (min) {
      if (parseInt(inputValue, 10) < parseInt(maxValue, 10)) {
        updateMinPrice(inputValue);
      } else {
        updateMinPrice(inputValue);
        updateMaxPrice(inputValue);
      }
    } else if (parseInt(inputValue, 10) > parseInt(minValue, 10)) {
      updateMaxPrice(inputValue);
    } else {
      updateMaxPrice(inputValue);
      updateMinPrice(inputValue);
    }
  }

  handleTextInputChange(e, min) {
    this.handleInputChange(e, min);
    e.target.value = '';
  }

  render() {
    const { minRangeValue, maxRangeValue } = this.state;
    const { minValue, maxValue } = this.props;

    return (
      <div className="filter-block filter__price-filter">
        <h3>Price filter </h3>
        <section className="range-slider">
          <span className="rangeValues">
            ${minValue} - ${maxValue}
          </span>
          <input
            value={minValue}
            min={minRangeValue}
            max={maxRangeValue}
            step="5"
            type="range"
            onChange={e => this.handleInputChange(e, true)}
          />
          <input
            value={maxValue}
            min={minRangeValue}
            max={maxRangeValue}
            step="5"
            type="range"
            onChange={e => this.handleInputChange(e)}
          />
        </section>
        <div className="price-fields">
          <label htmlFor="price-from" className="price-form">
            From
            <input
              id="price-from"
              type="text"
              onBlur={e => this.handleInputChange(e, true)}
            />
          </label>
          <label htmlFor="price-to" className="price-form">
            To
            <input
              id="price-to"
              type="text"
              onBlur={e => this.handleInputChange(e)}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default PriceFilter;
