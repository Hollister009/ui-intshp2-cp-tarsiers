import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TOGGLE_HEADER_AND_FOOTER_VISIBILITY } from '../actions';

class CheckoutPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(TOGGLE_HEADER_AND_FOOTER_VISIBILITY);
  }

  componentWillUnmount() {
    const { dispatch } = this.props;

    dispatch(TOGGLE_HEADER_AND_FOOTER_VISIBILITY);
  }

  render() {
    return <h1>Hello from CheckoutPage page</h1>;
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(CheckoutPage);
