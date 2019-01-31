import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FlagsProvider } from 'react-feature-flags';

import appConfig from '../config/appConfig';
import HttpService from '../utils/http.service';
import { getProducts } from './actions';
import Header from './common/Header/HeaderContainer';
import Footer from './common/Footer/FooterContainer';

import Content from './common/Content';
import ErrorHandler from './shared/ErrorHandler/ErrorHandler';
import '../styles/index.scss';

const { products } = appConfig.apiResources;

class App extends Component {
  constructor() {
    super();
    this.state = { featureFlags: [], isFlagsReady: false };
  }

  componentDidMount() {
    const { dispatch } = this.props;

    HttpService.get(products)
      .then(res => dispatch(getProducts(res.data)))
      .catch(error => console.log(error));

    HttpService.get(appConfig.apiResources.killswitch)
      .then(response => {
        this.setState({ featureFlags: response.data.flags });
        console.log('flags', response.data.flags);
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

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(App);
