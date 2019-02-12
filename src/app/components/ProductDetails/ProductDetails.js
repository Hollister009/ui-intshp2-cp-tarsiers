import React, { Component } from 'react';
import ProductDescription from '../ProductDescription/ProductDescription';
import ImgPreview from '../ProductDescription/ImgPreview';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import HttpService from '../../../utils/http.service';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { relatedProducts: [] };
  }

  componentDidMount() {
    this.forceUpdate();
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    const { products, id } = this.props;
    const { relatedProducts } = this.state;
    const item = products.find(el => el._id === id);

    if (item && !relatedProducts.length) {
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
    }
  }

  getFilteredProducts = params =>
    HttpService.get('/api/filtered-products', params);

  render() {
    const { id, products, wishlist } = this.props;
    const item = products.find(el => el._id === id);
    const { relatedProducts } = this.state;

    return (
      <div className="container">
        <ProductDescription item={item} />
        {relatedProducts.length ? (
          <RelatedProducts
            item={item}
            products={relatedProducts}
            wishlist={wishlist}
          />
        ) : null}
      </div>
    );
  }
}

export default ProductDetails;
