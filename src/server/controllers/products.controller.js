const mongojs = require('mongojs');

const db = mongojs(
  'mongodb://admin:admin123@ds157064.mlab.com:57064/tarsiers',
  ['products']
);

const getProducts = (req, res) =>
  // eslint-disable-next-line array-callback-return
  db.products.find((err, products) => {
    if (err) {
      res.send(err);
    }

    res.json(products);
  });

const getFilteredProducts = (req, res) => {
  console.log('req', req.query);
  const { sizes, brands, category, price, available } = req.query;

  db.products.find(
    {
      $and: [
        { brand: { $in: brands } },
        { category },
        { sizes: { $in: sizes } },
        { price: { $gte: JSON.parse(price).min, $lte: JSON.parse(price).max } },
        { available }
      ]
    },
    (err, products) => {
      if (err) {
        res.send(err);
      }

      res.json(products);
    }
  );
};

module.exports = { getProducts, getFilteredProducts };
