import React, { Component } from 'react';

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
    return (
      <div className="filter-block">
        <h3>Brands</h3>
        <label htmlFor="brand-reebok" className="filter-option-container">
          Reebok
          <input
            id="brand-reebok"
            type="checkbox"
            onChange={e => this.onChange(e, 'Reebok')}
          />
          <span className="checkmark" />
        </label>
        <label htmlFor="brand-adidas" className="filter-option-container">
          Adidas
          <input
            id="brand-adidas"
            type="checkbox"
            onChange={e => this.onChange(e, 'Adidas')}
          />
          <span className="checkmark" />
        </label>
        <label htmlFor="brand-nike" className="filter-option-container">
          Nike
          <input
            id="brand-nike"
            type="checkbox"
            onChange={e => this.onChange(e, 'Nike')}
          />
          <span className="checkmark" />
        </label>
      </div>
    );
  }
}

export default Brands;
