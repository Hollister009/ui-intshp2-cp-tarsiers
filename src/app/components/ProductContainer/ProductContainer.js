import React from 'react';
import styles from './ProductContainer.module.scss';
import Carousel from '../Carousel/Carousel';
import HttpService from '../../../utils/http.service';
import appConfig from '../../../config/appConfig';

class ProductContainer extends React.Component {
  title = 'New Arrivals';

  state = { products: [] };

  componentWillMount() {
    HttpService.get(appConfig.apiResources.products).then(res =>
      this.setState({ products: res })
    );
  }

  render() {
    const { products } = this.state;
    const titleArr = this.title.split(' ');
    console.log('response' + this.state.products);
    return (
      <section className={`${styles.products} container`}>
        <div className={styles.products_heading}>
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
        <div className={styles.products_list}>
          <Carousel itemsPerView={4} extended data={products} />
        </div>
      </section>
    );
  }
}

export default ProductContainer;
