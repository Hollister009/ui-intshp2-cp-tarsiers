const mongojs = require('mongojs');
const config = require('../config');

const db = mongojs(config.dbUrl, ['products']);

const getProducts = (req, res) => {
  const {
    _id = null,
    sizes = null,
    brands = null,
    category = null,
    price,
    available = null,
    skip = 0,
    limit = 0,
    tag = null
  } = req.query;

  const idQuery = _id ? { _id: mongojs.ObjectId(_id) } : {};
  const tagQuery = tag ? { tag } : {};
  const categoryQuery = category ? { category } : {};
  const brandQuery = brands ? { brand: { $in: brands } } : {};
  const sizesQuery = sizes ? { sizes: { $in: sizes } } : {};
  const availableQuery = available === 'true' ? { available: true } : {};
  const priceQuery = price
    ? { price: { $gte: JSON.parse(price).min, $lte: JSON.parse(price).max } }
    : {};

  db.products
    .find({
      $and: [
        idQuery,
        tagQuery,
        brandQuery,
        sizesQuery,
        categoryQuery,
        priceQuery,
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

module.exports = { getProducts };
