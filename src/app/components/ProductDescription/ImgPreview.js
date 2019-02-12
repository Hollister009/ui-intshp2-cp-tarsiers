/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
// import ImgSwitch from './ImgSwitch'
// import ActiveThunb from './ActiveTumb';
import './Test.scss';

const src =
  'https://res.cloudinary.com/so/image/upload/v1548069124/products/cycling%20tshirt/blue.jpg';

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
      figureStyle: {
        ...state.figureStyle,
        backgroundPosition: `${x}% ${y}%`
      }
    }));
  };

  changeMainImage = e => {
    const newMainUrl = e.target.getAttribute('src');

    this.setState({
      mainImgURL: newMainUrl,
      figureStyle: {
        backgroundImage: `url(${newMainUrl})`
      }
    });
  };

  // toggle = (e, colors) => {
  //   if (e.type === 'click') {
  //     const value = e.target.innerText;

  //     this.setState({ image: colors[value] });
  //   }
  // };

  //   thumbnails = (items, colors) => {
  //     (Object.values(item.colorUrls).map((el, index) => (
  //       <img src={el} alt="" key={index} onClick={e => this.toggle(e, items)}/>
  //   };

  render() {
    const { item } = this.props;
    const { figureStyle } = this.state;
    const thumbnails = Object.values(item.colorUrls).map(el => (
      <img src={el} alt="" key={el} onClick={this.changeMainImage} />
    ));
    // const mainimg = thumbnails[1];

    return (
      <div className="img-container">
        <div className="test-container">
          <figure onMouseMove={this.handleMouseMove} style={figureStyle}>
            <img src={this.state.mainImgURL} />
          </figure>
        </div>

        <div className="thumbnails-box">{thumbnails}</div>
      </div>
    );
  }
}
