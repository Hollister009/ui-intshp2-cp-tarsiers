const paypal = require('paypal-rest-sdk');
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
  // TODO: pass data to payment in POST
  let hostname;

  if (process.env.NODE_ENV === 'production') {
    hostname = getHostUrl(req);
  } else {
    hostname = 'http://localhost:3000';
  }

  console.log(hostname);

  const return_url = `${hostname}/?payment=success`;
  const cancel_url = `${hostname}/?payment=cancel`;
  console.log(`Success: ${return_url}`);
  console.log(`Cancel:  ${cancel_url}`);

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
              price: '10.00',
              currency: 'USD',
              quantity: 1
            }
          ]
        },
        amount: {
          currency: 'USD',
          total: '10.00'
        },
        description: 'This is the payment description.'
      }
    ]
  };

  paypal.payment.create(create_payment_json, function(error, payment) {
    if (error) {
      console.log(error.response);
      throw error;
    } else {
      for (let i = 0; i < payment.links.length; i++) {
        //Redirect user to this endpoint for redirect url
        if (payment.links[i].rel === 'approval_url') {
          res.send(payment.links[i].href);
        }
      }
    }
  });
}

function onSuccess(req, res) {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;
  console.log(req.query);

  const execute_payment_json = {
    payer_id: payerId,
    transactions: [
      {
        amount: {
          currency: 'USD',
          total: '10.00'
        }
      }
    ]
  };

  paypal.payment.execute(paymentId, execute_payment_json, function(
    error,
    payment
  ) {
    if (error) {
      console.log(error.response);
      // Handle error on the client
      res.status(404).send(error.response.message);
    } else {
      console.log(JSON.stringify(payment));
      res.send('Success');
    }
  });
}

function onCancel(req, res) {
  const { token } = req.query;
  console.log(`request canceled with token: ${token}`);
  res.send('Canceled');
}

module.exports = { payment, onSuccess, onCancel };
