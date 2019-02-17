import React, { Component } from 'react';
import { productType } from '../../types';

import './ImgPreview.scss';

class ImgPreview extends Component {
  static propTypes = { item: productType.isRequired };

  constructor(props) {
    super(props);

    this.state = {
      figureStyle: {
        backgroundImage: '',
        backgroundPosition: '0% 0%'
      },
      mainImgURL: ''
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
    if (e.keyCode === 13 || e.type === 'click') {
      const newMainUrl = e.target.getAttribute('src');
      const activeElement = e.target.parentNode;
      const activeElementSiblings = e.target.parentNode.parentNode.childNodes;

      activeElementSiblings.forEach(element => {
        element.classList.remove('active');
      });
      activeElement.classList.toggle('active');

      this.setState({
        mainImgURL: newMainUrl,
        figureStyle: { backgroundImage: `url(${newMainUrl})` }
      });
    }
  };

  render() {
    const { item } = this.props;
    const { figureStyle, mainImgURL } = this.state;

    if (item && !mainImgURL.length) {
      this.setState(state => ({
        figureStyle: {
          ...state.figureStyle,
          backgroundImage: `url(${item.src})`
        },
        mainImgURL: item.src
      }));
    } else if (!item) {
      return null;
    }

    const imgState = this.state;
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
          <img src={imgState.mainImgURL} alt="thumbnail" />
          <div style={figureStyle} />
        </figure>
        <div className="thumbnails-box">{thumbnails}</div>
      </div>
    );
  }
}

export default ImgPreview;
