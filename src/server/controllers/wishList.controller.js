const mongojs = require('mongojs');

const db = mongojs(
  'mongodb://admin:admin123@ds157064.mlab.com:57064/tarsiers',
  ['products', 'wishList']
);

function getWishList(req, res) {
  const { userId } = req.body; // eslint-disable-line

  db.wishList.findOne(
    { userId: '5c3c3021e7179a7d124487f3' },
    (err, response) => {
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
    }
  );
}

function addToWishList(req, res) {
  const { productId } = req.body; // eslint-disable-line

  db.wishList.update(
    { userId: '5c3c3021e7179a7d124487f3' },
    { $push: { wishList: mongojs.ObjectId(productId) } },
    err => {
      if (err) {
        res.send(err);
      }

      res.status(200).send();
    }
  );
}

function removeFromWishList(req, res) {
  const { userId, productId } = req.body; // eslint-disable-line

  db.wishList.update(
    { userId: '5c3c3021e7179a7d124487f3' },
    { $pull: { wishList: mongojs.ObjectId(productId) } },
    err => {
      if (err) {
        res.send(err);
      }

      res.status(200).send();
    }
  );
}

module.exports = { getWishList, addToWishList, removeFromWishList };
