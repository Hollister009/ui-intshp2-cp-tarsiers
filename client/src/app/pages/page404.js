import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TOGGLE_HEADER_AND_FOOTER_VISIBILITY } from '../actions';

import '../../styles/pages/page404.scss';
import appConfig from '../../config/appConfig';

class Page404 extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(TOGGLE_HEADER_AND_FOOTER_VISIBILITY);
  }

  componentWillUnmount() {
    const { dispatch } = this.props;

    dispatch(TOGGLE_HEADER_AND_FOOTER_VISIBILITY);
  }

  render() {
    return (
      <div className="container">
        <div className="not_found_block">
          <div className="nf_heading">
            <h1 className="not_found_header">
              Sorry! This page is not found. Come back
              <Link to="/" className="home">
                Home!
              </Link>
            </h1>
          </div>
          <div>
            <img
              src={appConfig.imageRes.pageNotFound}
              alt="Not found cat"
              className="not_found_img"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Page404);
