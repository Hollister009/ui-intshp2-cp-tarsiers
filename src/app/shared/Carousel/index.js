import React, { Component } from 'react';
import './Carousel.scss';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.carouselRef = React.createRef();
    this.wrapperRef = React.createRef();
    this.isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;

    this.carouselStyle = {
      translation: 0,
      scrollCounter: 0,
      doubleSideMargin: 30
    };

    this.carouselStyleSheet = { transform: null, width: null };

    this.wrapperStyle = { overflowX: this.isTouchDevice ? 'scroll' : 'hidden' };
  }

  nextSlide = () => {
    const {
      translateStep,
      translation,
      scrollCounter,
      width,
      wrapperWidth
    } = this.carouselStyle;

    this.carouselStyle = {
      ...this.carouselStyle,
      translation:
        translation -
        ((width + translation - wrapperWidth) / 2 < translateStep
          ? width + translation - wrapperWidth
          : translateStep),
      scrollCounter: scrollCounter + 1
    };

    this.setState(state => ({ ...state }));

    this.carouselStyleSheet = {
      ...this.carouselStyleSheet,
      transform: `translate(${this.carouselStyle.translation}px)`
    };
  };

  prevSlide = () => {
    const { translateStep, translation, scrollCounter } = this.carouselStyle;

    this.carouselStyle = {
      ...this.carouselStyle,
      translation:
        translation +
        (-translation / 2 < translateStep ? -translation : translateStep),
      scrollCounter: scrollCounter - 1
    };

    this.setState(state => ({ ...state }));

    this.carouselStyleSheet = {
      ...this.carouselStyleSheet,
      transform: `translate(${this.carouselStyle.translation}px)`
    };
  };

  componentDidUpdate = () => {
    const { data } = this.props;
    const { translateStep } = this.carouselStyle;

    // this.carouselStyleSheet = {
    //   ...this.carouselStyleSheet
    // }

    this.carouselStyle = {
      ...this.carouselStyle,
      width: this.carouselRef.current.scrollWidth,
      translateStep:
        (this.carouselRef.current.scrollWidth +
          this.carouselStyle.doubleSideMargin) /
        data.length,
      visibleItems: Math.ceil(
        this.wrapperRef.current.offsetWidth / translateStep
      ),
      wrapperWidth: this.wrapperRef.current.offsetWidth
    };
  };

  renderButtons() {
    const {
      translation,
      scrollCounter,
      visibleItems,
      width,
      wrapperWidth
    } = this.carouselStyle;
    const { data } = this.props;

    console.log(
      'width',
      width,
      'wrapper',
      wrapperWidth,
      'type widt',
      typeof width
    );

    // if (width === 0) return null;
    // || width <= wrapperWidth
    return this.isTouchDevice ? null : (
      <React.Fragment>
        <button
          type="button"
          className="carousel__button carousel__button--prev"
          onClick={this.prevSlide}
          disabled={translation === 0}
        >
          <i className="fas fa-angle-left" />
        </button>

        <button
          type="button"
          className="carousel__button carousel__button--next"
          onClick={this.nextSlide}
          disabled={data.length - scrollCounter === visibleItems}
        >
          <i className="fas fa-angle-right" />
        </button>
      </React.Fragment>
    );
  }

  render() {
    const { children } = this.props;

    return (
      <div
        className="carousel__wrapper"
        style={this.wrapperStyle}
        ref={this.wrapperRef}
      >
        <div
          className="carousel"
          style={this.carouselStyleSheet}
          ref={this.carouselRef}
        >
          {children}
        </div>
        {this.renderButtons()}
      </div>
    );
  }
}

Carousel.defaultProps = { data: [] };

export default Carousel;
