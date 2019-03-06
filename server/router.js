const express = require('express');

const router = express.Router();

const options = require('./options');
const productsController = require('./controllers/products.controller');
const wishListController = require('./controllers/wishList.controller');
const cartListController = require('./controllers/cart.controller');
const checkoutController = require('./controllers/checkout.controller');

// Products
router.get('/products', productsController.getProducts);

// WishList
router
  .get('/wish-list', wishListController.getWishList)
  .post('/add-to-wish-list', wishListController.addToWishList)
  .post('/remove-from-wish-list', wishListController.removeFromWishList);

// Cart
router
  .get('/cart', cartListController.getCartList)
  .post('/add-to-cart', cartListController.addToCartList)
  .post('/remove-from-cart', cartListController.removeFromCartList);

// Checkout
router
  .post('/payment', checkoutController.payment)
  .get('/success', checkoutController.onSuccess)
  .get('/cancel', checkoutController.onCancel);

// Options
router
  .get('/baner', options.getBanner)
  .get('/promotions', options.getPromotions)
  .get('/killswitch', options.getKillswitch);

router.get('*', options.NotFound);

module.exports = router;
