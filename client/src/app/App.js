/* eslint-disable no-console */
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FlagsProvider } from 'react-feature-flags';

import appConfig from '../config/appConfig';
import HttpService from '../utils/http.service';
import ls from '../utils/localStorage.service';

import ErrorHandler from './shared/ErrorHandler/ErrorHandler';
import Header from './common/Header/HeaderContainer';
import Footer from './common/Footer/FooterContainer';
import Content from './common/Content';

import '../styles/index.scss';

const { products, wishlist } = appConfig.apiResources;

export default class App extends Component {
  state = { featureFlags: [], isFlagsReady: false };

  componentDidMount() {
    const {
      updateNewArrivals,
      getWishListItems,
      updateFiltered,
      loadPrevCart
    } = this.props;
    const params = { skip: 0, limit: 9 };

    // Syncronizing state.cart with LocalStorage:
    const cartState = ls.getState('cart');

    if (!cartState) {
      ls.setState('cart', { productsInCart: [] });
    } else if (cartState.productsInCart.length !== 0) {
      loadPrevCart(cartState);
    }

    HttpService.get(products, { params })
      .then(res => {
        updateNewArrivals(res.data);
        updateFiltered(res.data.slice(0, 6));
      })
      .catch(error => console.log(error));

    HttpService.get(wishlist)
      .then(res => getWishListItems(res.data))
      .catch(error => console.log(error));

    HttpService.get(appConfig.apiResources.killswitch)
      .then(response => {
        this.setState({ featureFlags: response.data.flags });
      })
      .finally(() => this.setState({ isFlagsReady: true }));
  }

  render() {
    const { featureFlags, isFlagsReady } = this.state;

    return isFlagsReady ? (
      <FlagsProvider value={featureFlags}>
        <Router>
          <React.Fragment>
            <Header />
            <ErrorHandler>
              <Content className="content" />
            </ErrorHandler>
            <Footer />
          </React.Fragment>
        </Router>
      </FlagsProvider>
    ) : null;
  }
}
