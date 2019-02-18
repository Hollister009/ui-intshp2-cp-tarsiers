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
    const { filter } = this.props;
    const sizesPairs = { Small: 's', Medium: 'm', Large: 'l', 'X-large': 'xl' };
    const sizesList = Object.entries(sizesPairs).map(el => {
      const shouldBeHighlighted = filter.sizes.includes(el[1])
        ? { color: '#ff5912' }
        : {};

      return (
        <label
          key={el}
          htmlFor={`size-${el[0].toLowerCase()}`}
          className="filter-option-container"
          style={shouldBeHighlighted}
        >
          {el[0]}
          <input
            id={`size-${el[0].toLowerCase()}`}
            type="checkbox"
            onChange={e => this.onChange(e, el[1])}
            checked={filter.sizes.includes(el[1])}
          />
          <span className="checkmark" />
        </label>
      );
    });

    return (
      <div className="filter-block">
        <h3>Size</h3>
        {sizesList}
      </div>
    );
  }
}

export default Sizes;
