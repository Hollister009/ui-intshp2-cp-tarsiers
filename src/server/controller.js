const mongojs = require('mongojs');

const db = mongojs(
  'mongodb://admin:admin123@ds157064.mlab.com:57064/tarsiers',
  ['products', 'wishList']
);

const banner = require('./dummy-data/baner.json');
const promotions = require('./dummy-data/promotions.json');

function getProducts(req, res) {
  // eslint-disable-next-line
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

function addToWishList(req, res) {
  const { userId, productId } = req.body; // eslint-disable-line

  db.wishList.update(
    { userId: '5c3c3021e7179a7d124487f3' },
    { $push: { wishList: productId } },
    err => {
      if (err) {
        res.send(err);
      }

      res.sendStatus(200);
    }
  );
}

function getWishList(req, res) {
  const { userId } = req.body; // eslint-disable-line

  db.wishList.find({ userId: '5c3c3021e7179a7d124487f3' }, (err, wishList) => {
    //
    if (err) {
      res.send(err);
    }

    res.json(wishList);
  });
}

function removeFromWishList(req, res) {
  const { userId, productId } = req.body; // eslint-disable-line

  db.wishList.update(
    { userId: '5c3c3021e7179a7d124487f3' },
    { $pull: { wishList: productId } },
    (err, wishList) => {
      if (err) {
        res.send(err);
      }

      res.json(wishList);
    }
  );
}

function notFound(req, res) {
  res.status(404).send();
}

module.exports = {
  getProducts,
  getBanner,
  getPromotions,
  getWishList,
  addToWishList,
  removeFromWishList,
  notFound
};
