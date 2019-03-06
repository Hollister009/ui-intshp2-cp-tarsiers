const mongojs = require('mongojs');
const config = require('../config');

const db = mongojs(config.dbUrl, ['products']);

const getNewArrivals = (req, res) => {
  const { skip, limit } = req.query;

  db.products
    .find()
    .sort({ _id: -1 })
    .skip(parseInt(skip, 10))
    .limit(parseInt(limit, 10), (err, products) => {
      if (err) {
        res.send(err);
      }

      res.json(products);
    });
};

const getProductItem = (req, res) => {
  const { _id } = req.query;

  db.products.find({ _id: mongojs.ObjectId(_id) }, (err, response) => {
    if (err) {
      res.send(err);
    }
    res.json(response);
  });
};

const getFilteredProducts = (req, res) => {
  const {
    sizes,
    brands,
    category,
    price,
    available,
    skip,
    limit,
    tag
  } = req.query;
  const tagQuery = tag ? { tag } : {};
  const categoryQuery = category ? { category } : {};
  const brandQuery = brands ? { brand: { $in: brands } } : {};
  const sizesQuery = sizes ? { sizes: { $in: sizes } } : {};
  const availableQuery = available === 'true' ? { available: true } : {};

  db.products
    .find({
      $and: [
        tagQuery,
        brandQuery,
        sizesQuery,
        categoryQuery,
        { price: { $gte: JSON.parse(price).min, $lte: JSON.parse(price).max } },
        availableQuery
      ]
    })
    .sort({ _id: -1 })
    .skip(parseInt(skip, 10))
    .limit(parseInt(limit, 10), (err, products) => {
      if (err) {
        res.send(err);
      }
      res.json(products);
    });
};

module.exports = { getProductItem, getNewArrivals, getFilteredProducts };
