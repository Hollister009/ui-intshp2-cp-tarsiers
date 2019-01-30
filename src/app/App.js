import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FlagsProvider } from 'react-feature-flags';

import appConfig from '../config/appConfig';
import HttpService from '../utils/http.service';
import { getProducts } from './actions';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import Content from './common/Content';

import '../styles/index.scss';

const { products } = appConfig.apiResources;

class App extends Component {
  constructor() {
    super();
    this.state = {
      featureFlags: []
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;

    HttpService.get(products)
      .then(res => dispatch(getProducts(res.data)))
      .catch(error => console.log(error));

    HttpService.get(appConfig.apiResources.killswitch).then(response => {
      this.setState({ featureFlags: response.data.flags });
      console.log(response);
    });
  }

  render() {
    const { featureFlags } = this.state;

    if (featureFlags) {
      return (
        <FlagsProvider value={featureFlags}>
          <Router>
            <HashRouter>
              <>
                <Header />
                <Content className="content" />
                <Footer />
              </>
            </HashRouter>
          </Router>
        </FlagsProvider>
      );
    }
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(App);
