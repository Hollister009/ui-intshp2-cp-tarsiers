import React, { Component } from 'react';

class PriceRange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minValue: 0,
      maxValue: 800
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e, min) {
    if (min) {
      if (parseInt(e.target.value) < parseInt(this.state.maxValue)) {
        this.setState({ minValue: e.target.value });
      } else {
        this.setState(state => ({ minValue: state.maxValue }));
      }
    } else if (parseInt(e.target.value) > parseInt(this.state.minValue)) {
      this.setState({ maxValue: e.target.value });
    } else {
      this.setState(state => ({ maxValue: state.minValue }));
    }
  }

  render() {
    return (
      <div className="field-block">
        <h3>Price filter </h3>
        <section className="range-slider">
          <span className="rangeValues">
            ${this.state.minValue} - ${this.state.maxValue}
          </span>
          <input
            value={this.state.minValue}
            min="0"
            max="1000"
            step="5"
            type="range"
            onChange={e => this.handleInputChange(e, true)}
          />
          <input
            value={this.state.maxValue}
            min="0"
            max="1000"
            step="5"
            type="range"
            onChange={e => this.handleInputChange(e)}
          />
        </section>
        <div className="">
          <label htmlFor="price-from">
            From
            <input
              id="price-from"
              type="text"
              onBlur={e => this.handleInputChange(e, true)}
            />
          </label>
          <label htmlFor="price-to">
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

export default PriceRange;
