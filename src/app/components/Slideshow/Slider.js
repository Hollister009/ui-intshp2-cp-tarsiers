import React, { Component } from 'react';

import {
  SliderLeftArrow,
  SliderRightArrow,
  SliderIndicator
} from './SliderParts';
import Slide from './Slide';

import './Slider.scss';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, isStopped: false };
  }

  componentDidMount = () => {
    this.activate();
  };

  componentWillUnmount = () => {
    this.deactivate();
  };

  activate = () => {
    this.interval = setInterval(this.goToNextSlide, 3000);
  };

  deactivate = () => {
    clearInterval(this.interval);
  };

  isStoppedCheck = () => {
    const { isStopped } = this.state;

    if (!isStopped) {
      this.setState({ isStopped: true });
    }
  };

  handleClickIndicator = id => {
    this.goToSlide(id);
    this.isStoppedCheck();
  };

  handleClickLeft = () => {
    this.goToPrevSlide();
    this.isStoppedCheck();
  };

  handleClickRight = () => {
    this.goToNextSlide();
    this.isStoppedCheck();
  };

  goToSlide = index => {
    this.setState({ activeIndex: index });
  };

  goToPrevSlide = e => {
    if (e) {
      e.preventDefault();
    }
    const { activeIndex } = this.state;
    const { slides } = this.props;

    let index = activeIndex;
    const slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    index -= 1;

    this.setState({ activeIndex: index });
  };

  goToNextSlide = e => {
    if (e) {
      e.preventDefault();
    }
    const { activeIndex } = this.state;
    const { slides } = this.props;

    let index = activeIndex;
    const slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    index += 1;

    this.setState({ activeIndex: index });
  };

  render() {
    const { isStopped, activeIndex } = this.state;
    const { slides } = this.props;
    const isLink = true;
    const stopCheck = isStopped ? null : this.activate;

    return (
      <div className="slider_container">
        <div
          className="slider"
          onMouseEnter={this.deactivate}
          onMouseLeave={stopCheck}
        >
          <SliderLeftArrow onClick={() => this.handleClickLeft()} />

          <ul className="slider__slides">
            {slides.map((slide, id) => (
              <Slide
                key={slide.id}
                index={id}
                activeIndex={activeIndex}
                slide={slide}
                isLink={isLink}
              />
            ))}
          </ul>

          <SliderRightArrow onClick={() => this.handleClickRight()} />

          <ul className="slider__indicators">
            {slides.map((slide, id) => (
              <SliderIndicator
                key={slide.id}
                index={id}
                activeIndex={activeIndex}
                isActive={activeIndex === id}
                onClick={() => this.handleClickIndicator(id)}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
