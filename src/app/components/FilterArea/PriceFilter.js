/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';

class PriceFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMinValue: 0,
      currentMaxValue: 800,
      minValue: 0,
      maxValue: 1000
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e, min) {
    const { currentMaxValue, currentMinValue } = this.state;
    const inputValue = e.target.value;

    if (min) {
      if (parseInt(inputValue, 10) < parseInt(currentMaxValue, 10)) {
        this.setState({ currentMinValue: inputValue });
      } else {
        this.setState({ currentMinValue: currentMaxValue });
      }
    } else if (parseInt(inputValue, 10) > parseInt(currentMinValue, 10)) {
      this.setState({ currentMaxValue: inputValue });
    } else {
      this.setState({ currentMaxValue: currentMinValue });
    }
  }

  handleTextInputChange(e, min) {
    const { maxValue, minValue } = this.state;
    const inputValue = e.target.value;

    if (min) {
      if (
        parseInt(inputValue, 10) >= parseInt(minValue, 10) &&
        parseInt(inputValue, 10) <= parseInt(maxValue, 10)
      ) {
        this.setState({ currentMinValue: e.target.value });
      }
    } else if (
      parseInt(inputValue, 10) <= parseInt(maxValue, 10) &&
      parseInt(inputValue, 10) >= parseInt(minValue, 10)
    ) {
      this.setState({ currentMaxValue: e.target.value });
    }
  }

  render() {
    const { currentMaxValue, currentMinValue, minValue, maxValue } = this.state;

    return (
      <div className="filter-block">
        <h3>Price filter </h3>
        <section className="range-slider">
          <span className="rangeValues">
            ${currentMinValue}- ${currentMaxValue}
          </span>
          <input
            value={currentMinValue}
            min={minValue}
            max={maxValue}
            step="5"
            type="range"
            onChange={e => this.handleInputChange(e, true)}
          />
          <input
            value={currentMaxValue}
            min={minValue}
            max={maxValue}
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
              onBlur={e => this.handleTextInputChange(e, true)}
            />
          </label>
          <label htmlFor="price-to" className="price-form">
            To
            <input
              id="price-to"
              type="text"
              onBlur={e => this.handleTextInputChange(e)}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default PriceFilter;
