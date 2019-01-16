import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import HttpService from '../utils/http.service';
import { getProducts } from './actions';

import '../styles/index.scss';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    HttpService.get('/api/products').then(res => dispatch(getProducts(res)));
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
