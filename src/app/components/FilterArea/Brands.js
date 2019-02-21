import React, { Component } from 'react';

const brandsArr = ['Reebok', 'Adidas', 'Nike'];

class Brands extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e, payload) {
    const { addBrand, removeBrand } = this.props;

    if (e.target.checked) {
      addBrand(payload);
    } else if (!e.target.checked) {
      removeBrand(payload);
    }
  }

  render() {
    const { filter } = this.props;

    const brandsList = brandsArr.map(el => {
      const shouldBeHighlighted = filter.brands.includes(el)
        ? { color: '#ff5912' }
        : {};

      return (
        <label
          key={el}
          htmlFor={`brand-${el.toLowerCase()}`}
          className="filter-option-container"
          style={shouldBeHighlighted}
        >
          {el}
          <input
            id={`brand-${el.toLowerCase()}`}
            type="checkbox"
            onChange={e => this.onChange(e, el)}
            checked={filter.brands.includes(el)}
          />
          <span className="checkmark" />
        </label>
      );
    });

    return (
      <div className="filter-block">
        <h3>Brands</h3>
        {brandsList}
      </div>
    );
  }
}

export default Brands;
