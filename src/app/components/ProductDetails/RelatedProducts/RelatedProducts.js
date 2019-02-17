import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { productType } from '../../../types';
import Carousel from '../../../shared/Carousel/index';
import ProductItemContainer from '../../../shared/ProductItem/ProductItemContainer';
import HttpService from '../../../../utils/http.service';

import './RelatedProducts.scss';

const title = 'Related Products';

class RelatedProducts extends Component {
  static propTypes = {
    item: productType,
    wished: PropTypes.bool,
    inCart: PropTypes.bool
  };

  static defaultProps = { item: null, wished: false, inCart: false };

  constructor(props) {
    super(props);
    this.state = { relatedProducts: [] };
  }

  getFilteredProducts = params =>
    HttpService.get('/api/filtered-products', params);

  componentDidMount = () => {
    this.getRelatedProducts();
  };

  getRelatedProducts = () => {
    const { item } = this.props;

    const params = {
      brands: [],
      available: null,
      price: { min: 0, max: 1000 },
      category: item.category,
      tag: item.tag,
      skip: 0,
      limit: 1000
    };

    this.getFilteredProducts({ params }).then(res => {
      this.setState({ relatedProducts: res.data });
    });
  };

  render() {
    const titleArr = title.split(' ');
    const { inCart, wished } = this.props;
    const { relatedProducts } = this.state;
    const extended = true;
    const list =
      relatedProducts &&
      relatedProducts.map(el => (
        <ProductItemContainer
          isAddedToCart={inCart}
          isAddedToWishList={wished}
          extended={extended}
          key={el._id}
          data={el}
        />
      ));

    return (
      <section className="container related-products">
        <div className="section_heading">
          <h2>
            <span className="highlighted">{titleArr[0]}</span>
            &nbsp;
            {titleArr[1]}
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <Carousel data={relatedProducts} extended>
          {list}
        </Carousel>
      </section>
    );
  }
}

export default RelatedProducts;
