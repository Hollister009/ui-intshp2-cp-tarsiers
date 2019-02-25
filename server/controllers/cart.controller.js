const mongojs = require('mongojs');
const config = require('../config');

const db = mongojs(config.dbUrl, ['products', 'cartList']);

function getCartList(req, res) {
  const { userId } = config;

  db.cartList.findOne({ userId }, (err, response) => {
    if (err) {
      res.send(err);
    }

    const { cartList } = response;

    db.products.find({ _id: { $in: cartList } }, (error, products) => {
      if (error) {
        res.send(err);
      }

      res.json(products);
    });
  });
}

function addToCartList(req, res) {
  const { userId } = config;
  const { productId } = req.body; // eslint-disable-line

  db.cartList.update(
    { userId },
    { $push: { cartList: mongojs.ObjectId(productId) } },
    err => {
      if (err) {
        res.send(err);
      }

      res.status(200).send();
    }
  );
}

function removeFromCartList(req, res) {
  const { userId } = config;
  const { productId } = req.body; // eslint-disable-line

  db.cartList.update(
    { userId },
    { $pull: { cartList: mongojs.ObjectId(productId) } },
    err => {
      if (err) {
        res.send(err);
      }

      res.status(200).send();
    }
  );
}

module.exports = {
  getCartList,
  addToCartList,
  removeFromCartList
};
