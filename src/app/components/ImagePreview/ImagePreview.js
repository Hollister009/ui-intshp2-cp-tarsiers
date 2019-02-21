import React, { Component } from 'react';
import { productType } from '../../types';

import './ImagePreview.scss';

class ImagePreview extends Component {
  static propTypes = { item: productType.isRequired };

  constructor(props) {
    super(props);

    this.state = {
      figureStyle: {
        backgroundImage: `url(${props.item.src})`,
        backgroundPosition: '0% 0%'
      },
      mainImgURL: props.item.src
    };
  }

  componentDidUpdate = prevProps => {
    const { item } = this.props;

    if (prevProps.item !== item) {
      this.setState(state => ({
        mainImgURL: item.src,
        figureStyle: {
          ...state.figureStyle,
          backgroundImage: `url(${item.src})`
        }
      }));
    }
  };

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
    if (e.keyCode === 13 || e.type === 'click') {
      const newMainUrl = e.currentTarget
        .querySelector('img')
        .getAttribute('src');
      const activeElement = e.currentTarget;
      const activeElementSiblings = e.target.parentNode.parentNode.childNodes;

      activeElementSiblings.forEach(element => {
        element.classList.remove('active');
      });
      activeElement.classList.add('active');

      this.setState(state => ({
        mainImgURL: newMainUrl,
        figureStyle: {
          ...state.figureStyle,
          backgroundImage: `url(${newMainUrl})`
        }
      }));
    }
  };

  render() {
    const { item } = this.props;
    const { figureStyle, mainImgURL } = this.state;

    const thumbnails = Object.values(item.colorUrls).map(el => (
      <div
        key={el}
        role="button"
        tabIndex="0"
        className="thumbnail-container"
        onClick={e => this.changeMainImage(e)}
        onKeyDown={e => this.changeMainImage(e)}
      >
        <img src={el} alt="" />
      </div>
    ));

    return (
      <div className="img-container">
        <figure onMouseMove={this.handleMouseMove}>
          <img src={mainImgURL} alt="thumbnail" />
          <div style={figureStyle} />
        </figure>
        <div className="thumbnails-box">{thumbnails}</div>
      </div>
    );
  }
}

export default ImagePreview;
