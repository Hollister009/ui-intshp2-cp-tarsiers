import React, { Component } from 'react';
import './Carousel.scss';
import '../WishListContainer/WishListContainer.scss';

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

    this.carouselStyleSheet = {
      transform: null
    };

    this.wrapperStyle = {
      'overflow-x': this.isTouchDevice ? 'scroll' : 'hidden'
    };
  }

  nextSlide = () => {
    const {
      translateStep,
      translation,
      scrollCounter,
      width
    } = this.carouselStyle;
    const wrapperWidth = this.wrapperRef.current.offsetWidth;

    this.carouselStyle = {
      ...this.carouselStyle,
      translation:
        translation -
        ((width + translation - wrapperWidth) / 2 < translateStep
          ? width + translation - wrapperWidth
          : translateStep),
      scrollCounter: scrollCounter + 1
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
    const { translateStep, translation, scrollCounter } = this.carouselStyle;

    this.carouselStyle = {
      ...this.carouselStyle,
      translation:
        translation +
        (-translation / 2 < translateStep ? -translation : translateStep),
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

  componentDidUpdate = () => {
    const { data } = this.props;
    const { translateStep } = this.carouselStyle;

    this.carouselStyleSheet = {
      ...this.carouselStyleSheet,
      width: `${this.carouselRef.current.scrollWidth}px`
    };

    this.carouselStyle = {
      ...this.carouselStyle,
      width: this.carouselRef.current.scrollWidth,
      translateStep:
        (this.carouselRef.current.scrollWidth +
          this.carouselStyle.doubleSideMargin) /
        data.length,
      visibleItems: Math.ceil(
        this.wrapperRef.current.offsetWidth / translateStep
      )
    };
  };

  renderButtons() {
    const { translation, scrollCounter, visibleItems } = this.carouselStyle;
    const { data } = this.props;

    return this.isTouchDevice || visibleItems >= data.length ? null : (
      <>
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
          disabled={data.length - scrollCounter === visibleItems}
        >
          <i className="fas fa-angle-right" />
        </button>
      </>
    );
  }

  render() {
    const { extended, children } = this.props;

    return (
      <div
        className="carousel--wrapper"
        style={this.wrapperStyle}
        ref={this.wrapperRef}
      >
        <div
          className={extended ? 'carousel' : 'wishlist-block'}
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

export default Carousel;
