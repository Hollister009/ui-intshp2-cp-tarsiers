/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './Test.scss';

const src =
  'https://res.cloudinary.com/dvhn8lvvz/image/upload/v1547726664/imgonline-com-ua-ReplaceColor-KP6g6kjZGl_apkxmm.jpg';

export default class ImgTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage:
        'url(https://res.cloudinary.com/dvhn8lvvz/image/upload/v1547726664/imgonline-com-ua-ReplaceColor-KP6g6kjZGl_apkxmm.jpg)',
      backgroundPosition: '0% 0%'
    };
  }

  handleMouseMove = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    this.setState({ backgroundPosition: `${x}% ${y}%` });
  };

  render() {
    return (
      <figure onMouseMove={this.handleMouseMove} style={this.state}>
        <img src={src} />
      </figure>
    );
  }
}
