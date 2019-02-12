/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
// import ImgSwitch from './ImgSwitch'
// import ActiveThunb from './ActiveTumb';
import './Test.scss';

export default class ImgPreview extends Component {
  constructor(props) {
    super(props);
    const { item } = this.props;

    this.state = {
      figureStyle: {
        backgroundImage: `url(${item.src})`,
        backgroundPosition: '0% 0%'
      },
      mainImgURL: item.src
    };
  }

  handleMouseMove = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    this.setState(state => ({
      ...state,
      figureStyle: { ...state.figureStyle, backgroundPosition: `${x}% ${y}%` }
    }));
  };

  changeMainImage = e => {
    const newMainUrl = e.target.getAttribute('src');

    this.setState({
      mainImgURL: newMainUrl,
      figureStyle: { backgroundImage: `url(${newMainUrl})` }
    });
  };

  render() {
    const { item } = this.props;
    const { figureStyle } = this.state;
    const thumbnails = Object.values(item.colorUrls).map(el => (
      <img src={el} alt="" key={el} onClick={this.changeMainImage} />
    ));

    return (
      <div className="img-container">
        <figure onMouseMove={this.handleMouseMove}>
          <img src={this.state.mainImgURL} />
          <div style={figureStyle} />
        </figure>
        <div className="thumbnails-box">{thumbnails}</div>
      </div>
    );
  }
}
