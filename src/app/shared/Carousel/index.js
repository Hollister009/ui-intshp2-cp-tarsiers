import React, { Component } from 'react';
import './Carousel.scss';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { buttonsVisibility: false };

    this.carouselRef = React.createRef();
    this.prevButtonRef = React.createRef();
    this.nextButtonRef = React.createRef();
    this.wrapperRef = React.createRef();

    this.isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;

    this.carouselStyle = {
      translation: 0,
      scrollCounter: 0,
      doubleSideMargin: 30
    };
    this.carouselStyleSheet = { transform: null, width: null };
    this.wrapperStyle = { overflowX: this.isTouchDevice ? 'scroll' : 'hidden' };

    this.updateButtonsAppearance = this.updateButtonsAppearance.bind(this);
  }

  updateButtonsAppearance = () => {
    if (this.carouselStyle.translation === 0) {
      this.prevButtonRef.current.setAttribute('disabled', true);
    } else {
      this.prevButtonRef.current.removeAttribute('disabled');
    }
    if (
      this.carouselStyle.width - this.carouselStyle.wrapperWidth <=
      -this.carouselStyle.translation
    ) {
      this.nextButtonRef.current.setAttribute('disabled', true);
    } else {
      this.nextButtonRef.current.removeAttribute('disabled');
    }
  };

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

    this.carouselRef.current.style.transform = `translate(${
      this.carouselStyle.translation
    }px)`;

    this.updateButtonsAppearance();
  };

  prevSlide = () => {
    const { translateStep, translation } = this.carouselStyle;

    this.carouselStyle = {
      ...this.carouselStyle,
      translation:
        translation +
        (-translation / 2 < translateStep ? -translation : translateStep)
    };

    this.carouselRef.current.style.transform = `translate(${
      this.carouselStyle.translation
    }px)`;

    this.updateButtonsAppearance();
  };

  componentDidMount = () => {
    this.forceUpdate();
  };

  componentDidUpdate = () => {
    const { data } = this.props;
    const { buttonsVisibility } = this.state;

    if (data.length) {
      this.carouselStyle = {
        ...this.carouselStyle,
        width: this.carouselRef.current.scrollWidth,
        wrapperWidth: this.wrapperRef.current.offsetWidth,
        translateStep:
          (this.carouselRef.current.scrollWidth +
            this.carouselStyle.doubleSideMargin) /
          data.length
      };
    }

    const { width, wrapperWidth } = this.carouselStyle;

    const buttonsShouldBeShown = width > wrapperWidth;

    if (!buttonsVisibility && buttonsShouldBeShown) {
      this.setState({ buttonsVisibility: true });
    }

    if (buttonsVisibility && !buttonsShouldBeShown) {
      this.setState({ buttonsVisibility: false });
      this.carouselStyle = {
        ...this.carouselStyle,
        translation: 0
      };
      this.carouselRef.current.style.transform = `translate(${
        this.carouselStyle.translation
      }px)`;
    }

    if (this.prevButtonRef.current) {
      this.updateButtonsAppearance();
    }
  };

  renderButtons() {
    return (
      <React.Fragment>
        <button
          type="button"
          className="carousel__button carousel__button--prev"
          onClick={this.prevSlide}
          ref={this.prevButtonRef}
        >
          <i className="fas fa-angle-left" />
        </button>

        <button
          type="button"
          className="carousel__button carousel__button--next"
          onClick={this.nextSlide}
          ref={this.nextButtonRef}
        >
          <i className="fas fa-angle-right" />
        </button>
      </React.Fragment>
    );
  }

  render() {
    const { children, data } = this.props;
    const { buttonsVisibility } = this.state;

    return !data.length ? null : (
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
        {!this.isTouchDevice && buttonsVisibility ? this.renderButtons() : null}
      </div>
    );
  }
}

Carousel.defaultProps = { data: [] };

export default Carousel;
