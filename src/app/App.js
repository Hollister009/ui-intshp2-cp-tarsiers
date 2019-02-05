/* eslint-disable no-console */
import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import { FlagsProvider } from 'react-feature-flags';

import appConfig from '../config/appConfig';
import HttpService from '../utils/http.service';

import ErrorHandler from './shared/ErrorHandler/ErrorHandler';
import Header from './common/Header/HeaderContainer';
import Footer from './common/Footer/FooterContainer';
import Content from './common/Content';

import '../styles/index.scss';

const { products, wishlist } = appConfig.apiResources;

export default class App extends Component {
  state = { featureFlags: [], isFlagsReady: false };

  componentDidMount() {
    const { getProductsItems, getWishListItems, updateFiltered } = this.props;

    HttpService.get(products)
      .then(res => {
        getProductsItems(res.data);
        updateFiltered(res.data.slice(0, 6));
      })
      .catch(error => console.log(error));

    HttpService.get(wishlist)
      .then(res => res.data.map(item => item._id))
      .then(item => getWishListItems(item))
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
          <HashRouter>
            <>
              <Header />
              <ErrorHandler>
                <Content className="content" />
              </ErrorHandler>
              <Footer />
            </>
          </HashRouter>
        </Router>
      </FlagsProvider>
    ) : null;
  }
}
