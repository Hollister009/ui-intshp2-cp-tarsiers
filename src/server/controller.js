const mongojs = require('mongojs');

const db = mongojs(
  'mongodb://admin:admin123@ds157064.mlab.com:57064/tarsiers',
  ['products']
);

const banner = require('./dummy-data/baner.json');
const promotions = require('./dummy-data/promotions.json');

function getProducts(req, res) {
  db.products.find((err, products) => {
    if (err) {
      res.send(err);
    }

    res.json(products);
  });
}

function getBanner(req, res) {
  res.json(banner);
}

function getPromotions(req, res) {
  res.json(promotions);
}

function notFound(req, res) {
  res.status(404).send();
}

module.exports = {
  getProducts,
  getBanner,
  getPromotions,
  notFound
};
