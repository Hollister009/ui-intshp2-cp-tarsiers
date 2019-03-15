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
    .skip(parseInt(skip, 10))
    .limit(parseInt(limit, 10), (err, products) => {
      if (err) {
        res.send(err);
      }
      res.json(products);
    });
};

module.exports = { getProducts, getFilteredProducts };
