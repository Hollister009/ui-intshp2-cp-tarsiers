import React, { Component } from 'react';
import './_carousel.scss';
import '../WishListContainer/WishListContainer.scss';
import ProductItem from '../ProductItem/ProductItem';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.wrapperRef = React.createRef();
    this.isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;

    this.carouselStyle = {
      translation: 0,
      scrollCounter: 0
    };

    this.carouselStyleSheet = {
      transform: null,
      overflow: this.isTouchDevice ? 'auto' : 'hidden'
    };
  }

  updateTranslateStep = value => {
    this.carouselStyle = {
      ...this.carouselStyle,
      translateStep: value
    };
  };

  nextSlide = () => {
    const {
      translation,
      translateStep,
      scrollCounter,
      width
    } = this.carouselStyle;

    const wrapperWidth = this.wrapperRef.current.offsetWidth;

    this.carouselStyle = {
      ...this.carouselStyle,
      translation:
        translation -
        ((width + translation - wrapperWidth) / 2 <
        this.carouselStyle.translateStep
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
    const { translation, translateStep, scrollCounter } = this.carouselStyle;

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

    this.carouselStyleSheet = {
      ...this.carouselStyleSheet,
      width: `${data.length * this.carouselStyle.translateStep - 30}px`
    };

    this.carouselStyle = {
      ...this.carouselStyle,
      width: data.length * this.carouselStyle.translateStep - 30,
      visibleItems: Math.ceil(
        this.wrapperRef.current.offsetWidth / this.carouselStyle.translateStep
      )
    };
  };

  renderButtons() {
    const { translation, scrollCounter, visibleItems } = this.carouselStyle;
    const { data } = this.props;

    // || data.length <= itemsPerView

    return this.isTouchDevice ? null : (
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
    const { data, extended } = this.props;

    return (
      <div className="carousel--wrapper" ref={this.wrapperRef}>
        <div
          className={extended ? 'carousel' : 'wishlist-block'}
          style={this.carouselStyleSheet}
        >
          {data &&
            data.map((el, index) => (
              <ProductItem
                extended={extended}
                key={el._id}
                updateTranslateStep={this.updateTranslateStep}
                data={el}
              />
            ))}
        </div>
        {this.renderButtons()}
      </div>
    );
  }
}

export default Carousel;
