import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import appConfig from '../config/appConfig';
import HttpService from '../utils/http.service';
import { getProducts, updateFiltered } from './actions';
import Header from './common/Header/HeaderContainer';
import Footer from './common/Footer/FooterContainer';

import Content from './common/Content';
import ErrorHandler from './shared/ErrorHandler/ErrorHandler';
import '../styles/index.scss';

const { products } = appConfig.apiResources;

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    HttpService.get(products)
      .then(res => {
        dispatch(getProducts(res.data));
        dispatch(updateFiltered(res.data));
      })
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

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(App);
