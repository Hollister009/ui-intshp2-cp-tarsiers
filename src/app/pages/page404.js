import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TOGGLE_HEADER_AND_FOOTER_VISIBILITY } from '../actions';

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
    return <div>Page is not found</div>;
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Page404);
