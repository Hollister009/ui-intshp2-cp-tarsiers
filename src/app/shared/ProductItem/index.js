import React, { Component } from 'react';

import HttpService from '../../../utils/http.service';
import appConfig from '../../../config/appConfig';
import { ViewFrontFull, ViewDetailsFull } from './viewFull';
import { ViewCartSmall, ViewInfoSmall } from './viewSmall';
import './ProductItem.scss';

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = { showDetails: false };
    this.itemRef = React.createRef();
  }

  showFront = () => this.setState({ showDetails: false });

  showDetails = () => this.setState({ showDetails: true });

  clickHandle = (e, id) => {
    e.preventDefault();

    HttpService.post(appConfig.apiResources.wishList, { productId: id }).then(
      res => console.log('res', res)
    );
  };

  render() {
    const { showDetails } = this.state;
    const { data, extended } = this.props;

    return extended ? (
      <div
        ref={this.itemRef}
        className="product-item--full"
        onMouseEnter={this.showDetails}
        onMouseLeave={this.showFront}
      >
        {showDetails ? (
          <ViewDetailsFull {...data} clickHandler={this.clickHandle} />
        ) : (
          <ViewFrontFull {...data} />
        )}
      </div>
    ) : (
      <div
        ref={this.itemRef}
        className="product-item--small"
        onMouseEnter={this.showDetails}
        onMouseLeave={this.showFront}
      >
        {showDetails ? (
          <ViewCartSmall {...data} />
        ) : (
          <ViewInfoSmall {...data} />
        )}
      </div>
    );
  }
}

export default ProductItem;
