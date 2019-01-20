import React from 'react';

const CN = 'product-item--small';

const ViewCartSmall = props => {
  const { src, title } = props;

  return (
    <React.Fragment>
      <div className={`${CN}__item-pic`}>
        <img src={src} alt="pic" />
      </div>
      <div className={`${CN}__item-info`}>
        <b>{title}</b>
        <div>
          <button type="button" className="add-to-card">
            <i className="fas fa-shopping-cart" />
            add to cart
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

const ViewInfoSmall = props => {
  const { src, title, price } = props;

  return (
    <React.Fragment>
      <div className={`${CN}__item-pic`}>
        <img src={src} alt="pic" />
      </div>
      <div className={`${CN}__item-info`}>
        <b>{title}</b>
        <div>
          <div className="stars">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </div>
          <span className="price">{`${price} $`}</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export { ViewCartSmall, ViewInfoSmall };
