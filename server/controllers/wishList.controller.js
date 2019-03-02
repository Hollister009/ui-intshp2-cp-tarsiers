const mongojs = require('mongojs');
const config = require('../config');

const db = mongojs(config.dbUrl, ['products', 'wishList']);

function getWishList(req, res) {
  const { userId } = config;

  db.wishList.findOne({ userId }, (err, response) => {
    if (err) {
      res.send(err);
    }

    const { wishList } = response;

    db.products.find({ _id: { $in: wishList } }, (error, products) => {
      if (error) {
        res.send(err);
      }

      res.json(products);
    });
  });
}

function addToWishList(req, res) {
  const { userId } = config;
  const product = req.body;

  console.log('PID atowili', product, product._id);
  db.wishList.update({ userId }, { $push: { wishList: product } }, err => {
    if (err) {
      res.send(err);
    }

    res.status(200).send();
  });
}

function removeFromWishList(req, res) {
  const { userId } = config;
  const product = req.body;

  console.log('product', product, product._id);
  db.wishList.update(
    { userId },
    { $pull: { wishList: { _id: product._id } } },
    err => {
      if (err) {
        res.send(err);
      }

      res.status(200).send();
    }
  );
}

module.exports = { getWishList, addToWishList, removeFromWishList };
