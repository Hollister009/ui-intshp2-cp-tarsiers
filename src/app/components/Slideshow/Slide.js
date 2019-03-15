import React from 'react';

const Links = props => {
  const { slide } = props;

  return (
    <a href={slide.link.href}>
      <img src={slide.img} alt={slide.alt} />
    </a>
  );
};

const Images = props => {
  const { slide } = props;

  return <img src={slide.img} alt={slide.alt} />;
};

const Slide = props => {
  const { index, activeIndex, isLink, slide } = props;
  const setClass =
    index === activeIndex
      ? 'slider__slide slider__slide--active'
      : 'slider__slide';

  if (!isLink) {
    return (
      <li className={setClass}>
        <Images slide={slide} />
      </li>
    );
  }

  return (
    <li className={setClass}>
      <Links slide={slide} />
    </li>
  );
};

export default Slide;
