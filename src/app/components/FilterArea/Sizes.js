import React, { Component } from 'react';

class Sizes extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e, payload) {
    const { addSize, removeSize } = this.props;
    console.log('checked : ', e.target.checked);

    if (e.target.checked) {
      addSize(payload);
    } else if (!e.target.checked) {
      removeSize(payload);
    }
  }

  render() {
    return (
      <div className="field-block">
        <h3>Size</h3>
        <label className="filter-area-container">
          Small
          <input type="checkbox" onChange={e => this.onChange(e, 'small')} />
          <span className="checkmark" />
        </label>
        <label className="filter-area-container">
          Medium
          <input type="checkbox" onChange={e => this.onChange(e, 'medium')} />
          <span className="checkmark" />
        </label>
        <label className="filter-area-container">
          Large
          <input type="checkbox" onChange={e => this.onChange(e, 'large')} />
          <span className="checkmark" />
        </label>
        <label className="filter-area-container">
          X-Large
          <input type="checkbox" onChange={e => this.onChange(e, 'xLarge')} />
          <span className="checkmark" />
        </label>
      </div>
    );
  }
}

export default Sizes;
