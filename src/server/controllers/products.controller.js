const mongojs = require('mongojs');

const db = mongojs(
  'mongodb://admin:admin123@ds157064.mlab.com:57064/tarsiers',
  ['products']
);

exports.getProducts = (req, res) =>
  // eslint-disable-next-line
  db.products.find((err, products) => {
    if (err) {
      res.send(err);
    }

    res.json(products);
  });
