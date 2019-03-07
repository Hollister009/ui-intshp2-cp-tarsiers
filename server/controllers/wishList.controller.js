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
    res.json(wishList);
  });
}

function addToWishList(req, res) {
  const { userId } = config;
  const product = req.body;

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
