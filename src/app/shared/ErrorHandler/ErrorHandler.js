import React from 'react';

class ErrorHandler extends React.Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    console.log('Error Handler: ', error);
    this.setState({ hasError: true, errorMsg: info });
  }

  render() {
    const { hasError, errorMsg } = this.state;
    const { children } = this.props;

    if (hasError) {
      console.log('Error Handler: ', hasError && errorMsg);
    }
    return children;
  }
}

export default ErrorHandler;
