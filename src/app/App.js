import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import appConfig from '../config/appConfig';
import HttpService from '../utils/http.service';
import { getProducts } from './actions';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import Content from './common/Content';

import '../styles/index.scss';

const { products } = appConfig.apiResources;

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    HttpService.get(products)
      .then(res => dispatch(getProducts(res.data)))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Router>
        <HashRouter>
          <>
            <Header />
            <Content className="content" />
            <Footer />
          </>
        </HashRouter>
      </Router>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(App);
