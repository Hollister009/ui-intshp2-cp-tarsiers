const paypal = require('paypal-rest-sdk');
const http = require('http');
const url = require('url');

paypal.configure({
  mode: 'sandbox', //sandbox or live
  client_id:
    'AVUMS1TNS8NH7npyZUJHNbRCeJdE-GxZOyGoEOyTi6XxJV454u_3g9cvfRY12HwGIeQcGq0NPYH5u6Yc',
  client_secret:
    'EF4F80UXz74LyzXD2zM6W7QqcoR2R2MP6nzuqA6gWdeT7Xv5qz7zJ43685zN13FZMu8Zx885FZT7flPT'
});

function getHostUrl(req) {
  return url.format({
    protocol: req.protocol,
    host: req.get('host')
  });
}

function payment(req, res) {
  const hosthame = getHostUrl(req);
  const return_url = `${hosthame}/success`;
  const cancel_url = `${hosthame}/cancel`;
  const create_payment_json = {
    intent: 'sale',
    payer: {
      payment_method: 'paypal'
    },
    redirect_urls: {
      return_url: return_url,
      cancel_url: cancel_url
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: 'item',
              sku: 'item',
              price: '1.00',
              currency: 'USD',
              quantity: 1
            }
          ]
        },
        amount: {
          currency: 'USD',
          total: '1.00'
        },
        description: 'This is the payment description.'
      }
    ]
  };

  paypal.payment.create(create_payment_json, function(error, payment) {
    if (error) {
      throw error;
    } else {
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === 'approval_url') {
          res.send(payment.links[i].href);
        }
      }
    }
  });
}

module.exports = { payment };
