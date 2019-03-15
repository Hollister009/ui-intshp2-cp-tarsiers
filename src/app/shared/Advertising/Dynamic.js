import React from 'react';

export default class Dynamic extends React.Component {
  markup(val) {
    return val ? { __html: val } : null;
  }

  render() {
    const myhtml = this.props;

    return <div dangerouslySetInnerHTML={this.markup(myhtml.html)} />;
  }
}
