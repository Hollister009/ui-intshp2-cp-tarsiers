import React from 'react';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import Content from './common/Content';
import '../styles/index.scss';
import ErrorHandler from './shared/ErrorHandler/ErrorHandler';

const App = () => (
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

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(App);
