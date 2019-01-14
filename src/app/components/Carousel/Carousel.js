import React, { Component } from 'react';
import './_carousel.scss';
import ProductItem from '../ProductItem/ProductItem';

class Carousel extends Component {
  carouselStyle = {
    translation: 0,
    scrollCounter: 0
  };

  carouselStyleSheet = {
    transform: null
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.wrapperRef = React.createRef();
  }

  updateTranslateStep = value => {
    this.carouselStyle = {
      ...this.carouselStyle,
      translateStep: value
    };
  };

  nextSlide = () => {
    // console.log(
    //   this.carouselStyle.width,
    //   this.carouselStyle.translation,
    //   this.wrapperRef.current.offsetWidth
    // );

    // console.log(
    //   (this.carouselStyle.width +
    //     this.carouselStyle.translation -
    //     this.wrapperRef.current.offsetWidth) /
    //     2
    // );

    this.carouselStyle = {
      ...this.carouselStyle,
      translation:
        this.carouselStyle.translation -
        ((this.carouselStyle.width +
          this.carouselStyle.translation -
          this.wrapperRef.current.offsetWidth) /
          2 <
        this.carouselStyle.translateStep
          ? this.carouselStyle.width +
            this.carouselStyle.translation -
            this.wrapperRef.current.offsetWidth
          : this.carouselStyle.translateStep),
      scrollCounter: this.carouselStyle.scrollCounter + 1
    };

    this.setState(state => ({
      ...state
    }));

    this.carouselStyleSheet = {
      ...this.carouselStyleSheet,
      transform: `translate(${this.carouselStyle.translation}px)`
    };
  };

  prevSlide = () => {
    const { translation, translateStep, scrollCounter } = this.carouselStyle;

    this.carouselStyle = {
      ...this.carouselStyle,
      translation: translation + translateStep,
      scrollCounter: scrollCounter - 1
    };

    this.setState(state => ({
      ...state
    }));

    this.carouselStyleSheet = {
      ...this.carouselStyleSheet,
      transform: `translate(${this.carouselStyle.translation}px)`
    };
  };

  componentWillMount = () => {
    const { data } = this.props;

    this.carouselStyleSheet = {
      ...this.carouselStyleSheet,
      width: `${data.length * 300 - 30}px`
    };

    this.carouselStyle = {
      ...this.carouselStyle,
      width: data.length * 300 - 30
    };
  };

  render() {
    const { data, itemsPerView } = this.props;
    const { translation, scrollCounter } = this.carouselStyle;

    return (
      <div className="carousel--wrapper" ref={this.wrapperRef}>
        <div className="carousel" style={this.carouselStyleSheet}>
          {data.map(el => (
            <ProductItem
              key={el._id}
              updateTranslateStep={this.updateTranslateStep}
              data={el}
            />
          ))}
        </div>
        <button
          type="button"
          className="carousel--button carousel--button-prev"
          onClick={this.prevSlide}
          disabled={translation === 0}
        >
          <i className="fas fa-angle-left" />
        </button>
        <button
          type="button"
          className="carousel--button carousel--button-next"
          onClick={this.nextSlide}
          disabled={data.length - scrollCounter === itemsPerView}
        >
          <i className="fas fa-angle-right" />
        </button>
      </div>
    );
  }
}

export default Carousel;
