import React from 'react';

class ErrorHandler extends React.Component {
  state = {
    hasError: null,
    errorMsg: ''
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true, errorMsg: info });
  }

  render() {
    const { hasError, errorMsg } = this.state;
    const { children } = this.props;

    if (hasError) {
      console.log('Error Handler: ', hasError && errorMsg.componentStack);
    }
    return children;
  }
}

export default ErrorHandler;
