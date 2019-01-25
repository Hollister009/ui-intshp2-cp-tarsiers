import React, { Component } from 'react';

class Sizes extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e, payload) {
    const { addSize, removeSize } = this.props;

    if (e.target.checked) {
      addSize(payload);
    } else if (!e.target.checked) {
      removeSize(payload);
    }
  }

  render() {
    return (
      <div className="filter-block">
        <h3>Size</h3>
        <label htmlFor="size-small" className="filter-option-container">
          Small
          <input
            id="size-small"
            type="checkbox"
            onChange={e => this.onChange(e, 's')}
          />
          <span className="checkmark" />
        </label>
        <label htmlFor="size-medium" className="filter-option-container">
          Medium
          <input
            id="size-medium"
            type="checkbox"
            onChange={e => this.onChange(e, 'm')}
          />
          <span className="checkmark" />
        </label>
        <label htmlFor="size-large" className="filter-option-container">
          Large
          <input
            id="size-large"
            type="checkbox"
            onChange={e => this.onChange(e, 'l')}
          />
          <span className="checkmark" />
        </label>
        <label htmlFor="size-xlarge" className="filter-option-container">
          X-Large
          <input
            id="size-xlarge"
            type="checkbox"
            onChange={e => this.onChange(e, 'xl')}
          />
          <span className="checkmark" />
        </label>
      </div>
    );
  }
}

export default Sizes;
