const sanitizeHtml = require('sanitize-html');

const mySanitize = dirty => {
  const myClean = sanitizeHtml(dirty, {
    allowedTags: [
      'b',
      'i',
      'em',
      'strong',
      'a',
      'div',
      'p',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'img',
      'style'
    ],
    allowedAttributes: { a: ['href'], img: ['src'] },
    allowedIframeHostnames: ['www.youtube.com'],
    allowedClasses: {
      p: ['item__description', 'simple'],
      div: ['baner', 'item', 'item__description', 'priceblock'],
      h3: ['item__name'],
      h2: ['priceblock__price'],
      img: ['banner__image', 'priceblock__cart']
    },
    nonTextTags: ['style']
  });

  return myClean;
};

export default mySanitize;
