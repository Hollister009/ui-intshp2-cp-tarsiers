import React, { Component } from 'react';

class WishListItem extends Component {
  state = { activeItem: false };

  onHoverItem = () =>
    this.setState(state => ({ activeItem: !state.activeItem }));

  render() {
    const { src, name, price } = this.props;
    const { activeItem } = this.state;

    return (
      <div
        className="item"
        onMouseEnter={this.onHoverItem}
        onMouseLeave={this.onHoverItem}
      >
        {' '}
        <div className="item-pic">
          <img src={src} alt="pic" />
        </div>
        <div className="item-info">
          <b>{name}</b>
          {activeItem ? (
            <div>
              <button type="button" className="add-to-card">
                <i className="fas fa-shopping-cart" />
                add to cart
              </button>
            </div>
          ) : (
            <div>
              <div className="stars">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <span className="price">{`${price} $`}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default WishListItem;
