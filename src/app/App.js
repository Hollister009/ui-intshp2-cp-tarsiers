/* eslint-disable no-console */
import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';

import appConfig from '../config/appConfig';
import HttpService from '../utils/http.service';

import ErrorHandler from './shared/ErrorHandler/ErrorHandler';
import Header from './common/Header/HeaderContainer';
import Footer from './common/Footer/FooterContainer';
import Content from './common/Content';

import '../styles/index.scss';

const { products, wishlist } = appConfig.apiResources;

export default class App extends Component {
  componentDidMount() {
    const { getProductsItems, getWishListItems } = this.props;

    HttpService.get(products)
      .then(res => getProductsItems(res.data))
      .catch(error => console.log(error));

    HttpService.get(wishlist)
      .then(res => res.data.map(item => item._id))
      .then(item => getWishListItems(item))
      .catch(error => console.log(error));
  }

  render() {
    return (
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
    );
  }
}
