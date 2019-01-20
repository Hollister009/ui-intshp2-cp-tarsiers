import React from 'react';

const CN = 'product-item--small';

const ViewCartSmall = props => {
  const { title } = props;

  return (
    <React.Fragment>
      <div className={`${CN}__info`}>
        <h4>{title}</h4>
        <button type="button" className="add-to-card">
          <i className="fas fa-shopping-cart" />
          add to cart
        </button>
      </div>
    </React.Fragment>
  );
};

const ViewInfoSmall = props => {
  const { title, price } = props;

  return (
    <React.Fragment>
      <div className={`${CN}__info`}>
        <h4>{title}</h4>
        <div className="info-group">
          <div className="rating">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </div>
          <span className="highlighted price">{`${price} $`}</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export { ViewCartSmall, ViewInfoSmall };
