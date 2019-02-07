/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './ImgPreview.scss';

export default class ImgPreview extends Component {
  render() {
    const { item } = this.props;
    const thumbnails = Object.values(item.colorUrls).map(el => (
      <img src={el} alt="" />
    ));

    return (
      <div className="imgpreview">
        <img src="https://res.cloudinary.com/dvhn8lvvz/image/upload/v1547726664/imgonline-com-ua-ReplaceColor-KP6g6kjZGl_apkxmm.jpg" />
        <div>{thumbnails}</div>
      </div>
    );
  }
}
