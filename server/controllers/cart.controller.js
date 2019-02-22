const mongojs = require('mongojs');

const db = mongojs(
  'mongodb://admin:admin123@ds157064.mlab.com:57064/tarsiers',
  ['products', 'cartList']
);

function getCartList(req, res) {
  const { userId } = req.body; // eslint-disable-line

  db.cartList.findOne(
    { userId: '5c3c3021e7179a7d124487f3' },
    (err, response) => {
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
    }
  );
}

function addToCartList(req, res) {
  const { productId } = req.body; // eslint-disable-line

  db.cartList.update(
    { userId: '5c3c3021e7179a7d124487f3' },
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
  const { productId } = req.body; // eslint-disable-line

  db.cartList.update(
    { userId: '5c3c3021e7179a7d124487f3' },
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
