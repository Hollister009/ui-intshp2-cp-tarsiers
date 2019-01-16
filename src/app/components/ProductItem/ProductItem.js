import React, { Component } from 'react';
import { DisplayFront, DisplayDetails } from './ProductDisplay';
import HttpService from '../../../utils/http.service';
import appConfig from '../../../config/appConfig';
import styles from './ProductItem.module.scss';

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

  componentDidMount = () => {
    const { updateTranslateStep } = this.props;

    updateTranslateStep(this.itemRef.current.offsetWidth + 30);
  };

  render() {
    const { data } = this.props;
    const { showDetails } = this.state;
    const cardView = showDetails ? (
      <DisplayDetails {...data} clickHandler={this.clickHandle} />
    ) : (
      <DisplayFront {...data} />
    );

    return (
      <div
        ref={this.itemRef}
        className={styles.product_card}
        onMouseEnter={this.showDetails}
        onMouseLeave={this.showFront}
      >
        {cardView}
      </div>
    );
  }
}

export default ProductItem;
