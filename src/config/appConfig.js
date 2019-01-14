const appConfig = {
  header: {
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
    ]
  },

  footer: {
    links: [
      {
        id: 10,
        value: 'about us',
        href: 'https://www.google.com',
        isOrigin: false
      },
      {
        id: 23,
        value: 'our products',
        href: '/products',
        isOrigin: true
      },
      {
        id: 36,
        value: 'join us',
        href: '/',
        isOrigin: true
      },
      {
        id: 11,
        value: 'contact us',
        href: '/',
        isOrigin: true
      },
      {
        id: 24,
        value: 'terms and conditions',
        href: '/',
        isOrigin: true
      },
      {
        id: 37,
        value: 'live support',
        href: '/',
        isOrigin: true
      },
      {
        id: 12,
        value: 'support',
        href: '/',
        isOrigin: true
      },
      {
        id: 25,
        value: 'our privacy',
        href: '/',
        isOrigin: true
      }
    ],
    payments: [
      {
        id: 8,
        value: 'amex',
        href: 'https://www.americanexpress.com/',
        isOrigin: false
      },
      {
        id: 9,
        value: 'discover',
        href: 'https://www.discover.com/',
        isOrigin: false
      },
      {
        id: 10,
        value: 'visa',
        href: 'https://usa.visa.com/',
        isOrigin: false
      },
      {
        id: 11,
        value: 'mastercard',
        href: 'https://www.mastercard.us',
        isOrigin: false
      },
      {
        id: 12,
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
    baner: '/api/baner'
  }
};

export default appConfig;
