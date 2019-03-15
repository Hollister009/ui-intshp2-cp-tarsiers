/* eslint-disable max-len */
const appConfig = {
  header: {
    contacts: { email: 'info@shopy.com', phone: '453 - 5553 - 996' },
    links: [
      {
        id: 1,
        href: 'https://twitter.com/griddynamics',
        icon: 'fab fa-twitter'
      },
      {
        id: 2,
        href: 'https://www.linkedin.com/company/grid-dynamics',
        icon: 'fab fa-linkedin-in'
      },
      {
        id: 3,
        href: 'https://www.instagram.com/griddynamics_ua/',
        icon: 'fab fa-instagram'
      },
      {
        id: 4,
        href: 'https://www.facebook.com/griddynamics',
        icon: 'fab fa-facebook-f'
      },
      {
        id: 5,
        href: 'https://plus.google.com/115302417170674279390',
        icon: 'fab fa-google-plus-g'
      }
    ],
    pages: [
      { id: 6, value: 'Home', href: '/' },
      { id: 7, value: 'Products', href: '/products' },
      { id: 8, value: 'Hot Deals', href: '/hot-deals' },
      { id: 9, value: 'About', href: '/about' },
      { id: 10, value: 'Contact', href: '/contacts' }
    ],
    options: [
      {
        id: 11,
        icon: 'fa fa-search',
        href: '/',
        desc: 'search'
      },
      {
        id: 12,
        icon: 'fa fa-user',
        href: '/',
        desc: 'user'
      },
      {
        id: 13,
        icon: 'fas fa-shopping-basket',
        href: '/',
        desc: 'cart'
      }
    ]
  },

  footer: {
    links: [
      {
        id: 14,
        value: 'about us',
        href: 'https://www.google.com',
        isOrigin: false
      },
      {
        id: 15,
        value: 'our products',
        href: '/products',
        isOrigin: true
      },
      {
        id: 16,
        value: 'join us',
        href: '/',
        isOrigin: true
      },
      {
        id: 17,
        value: 'contact us',
        href: '/',
        isOrigin: true
      },
      {
        id: 18,
        value: 'terms and conditions',
        href: '/',
        isOrigin: true
      },
      {
        id: 19,
        value: 'live support',
        href: '/',
        isOrigin: true
      },
      {
        id: 20,
        value: 'support',
        href: '/',
        isOrigin: true
      },
      {
        id: 21,
        value: 'our privacy',
        href: '/',
        isOrigin: true
      }
    ],
    payments: [
      {
        id: 22,
        value: 'amex',
        href: 'https://www.americanexpress.com/',
        isOrigin: false
      },
      {
        id: 23,
        value: 'discover',
        href: 'https://www.discover.com/',
        isOrigin: false
      },
      {
        id: 24,
        value: 'visa',
        href: 'https://usa.visa.com/',
        isOrigin: false
      },
      {
        id: 25,
        value: 'mastercard',
        href: 'https://www.mastercard.us',
        isOrigin: false
      },
      {
        id: 26,
        value: 'credit',
        href: 'https://www.paypal.com',
        isOrigin: false
      }
    ]
  },

  joinUsSnackbar: {
    message: 'You are registered now :) Have a great shopping!'
  },
  apiResources: {
    promotions: '/api/promotions',
    products: '/api/products',
    baner: '/api/baner',
    wishlist: '/api/wish-list',
    addToWishList: '/api/add-to-wish-list',
    removeFromWishList: '/api/remove-from-wish-list',
    killswitch: '/api/killswitch',
    addToCart: 'api/add-to-cart',
    removeFromCart: 'api/remove-from-cart',
    cart: '/api/cart'
  },
  filter: {
    price: {
      max: 1000,
      min: 0
    }
  },
  promotions: {
    slides: [
      {
        id: 0,
        img:
          'https://res.cloudinary.com/so/image/upload/v1547645865/slides/female.png',
        alt: 'Shopy',
        link: { href: 'http://www.shopy.com.py/', isOrigin: false }
      },
      {
        id: 1,
        img:
          'https://res.cloudinary.com/so/image/upload/v1547645865/slides/girl.jpg',
        alt: 'H&M',
        link: { href: 'https://www.hm.com/ua/', isOrigin: false }
      },
      {
        id: 2,
        img:
          'https://res.cloudinary.com/so/image/upload/v1547645865/slides/couple.jpg',
        alt: 'Mafia',
        link: { href: 'http://www.themafiastore.com/', isOrigin: false }
      }
    ]
  },
  killswitch: {
    wishlist: 'showWishlist',
    advertising: 'showAdvertisingArea'
  },
  productDescription: {
    subheader: 'Lorem Ipsum is simply dummy text',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  }
};

export default appConfig;
