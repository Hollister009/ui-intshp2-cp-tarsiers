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
      <div className="field-block">
        <h3>Brands</h3>
        <label className="filter-area-container">
          Reebok
          <input type="checkbox" onChange={e => this.onChange(e, 'reebok')} />
          <span className="checkmark" />
        </label>
        <label className="filter-area-container">
          Adidas
          <input type="checkbox" onChange={e => this.onChange(e, 'adidas')} />
          <span className="checkmark" />
        </label>
        <label className="filter-area-container">
          Nike
          <input type="checkbox" onChange={e => this.onChange(e, 'nike')} />
          <span className="checkmark" />
        </label>
        <label className="filter-area-container">
          Active
          <input type="checkbox" onChange={e => this.onChange(e, 'active')} />
          <span className="checkmark" />
        </label>
      </div>
    );
  }
}

export default Brands;
