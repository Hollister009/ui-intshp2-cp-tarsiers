/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './Test.scss';

const src =
  'https://res.cloudinary.com/so/image/upload/v1548069002/products/reebok%20jacket/red.jpg';

export default class ImgTest extends Component {
  constructor() {
    super();
    this.state = {
      figureStyle: {
        backgroundImage: `url(${src})`,
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
        backgroundImage: `url(${src})`,
        backgroundPosition: `${x}% ${y}%`
      }
    }));
  };

  render() {
    const { figureStyle } = this.state;

    return (
      <div className="test-container">
        <figure onMouseMove={this.handleMouseMove} style={figureStyle}>
          <img src={src} />
        </figure>
      </div>
    );
  }
}
