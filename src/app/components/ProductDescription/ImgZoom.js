/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './Test.scss';

// const src =
//   'https://res.cloudinary.com/so/image/upload/v1548069002/products/reebok%20jacket/red.jpg';

export default class ImgZoom extends Component {
  constructor(props) {
    super(props);

    const { item } = this.props;

    this.state = {
      figureStyle: {
        backgroundImage: `url(${item.src})`,
        backgroundPosition: '0% 0%'
      }
    };
  }

  handleMouseMove = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    this.setState(state => ({
      ...state,
      figureStyle: {
        backgroundImage: `url(${item.src})`,
        backgroundPosition: `${x}% ${y}%`
      }
    }));
  };

  render() {
    const { figureStyle } = this.state;

    return <div onMouseMove={this.handleMouseMove} style={figureStyle} />;
  }
}
