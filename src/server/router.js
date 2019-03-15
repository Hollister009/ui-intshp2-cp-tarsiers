const express = require('express');

const router = express.Router();

const productsController = require('./controllers/products.controller');
const wishListController = require('./controllers/wishList.controller');
const cartListController = require('./controllers/cart.controller');
const controller = require('./controller');

router.get('/api/products', productsController.getProducts);
router.get('/api/filtered-products', productsController.getFilteredProducts);
router.get('/api/baner', controller.getBanner);
router.get('/api/promotions', controller.getPromotions);
router.get('/api/killswitch', controller.getKillswitch);

router.get('/api/wish-list', wishListController.getWishList);
router.post('/api/add-to-wish-list', wishListController.addToWishList);
router.post(
  '/api/remove-from-wish-list',
  wishListController.removeFromWishList
);

router.get('/api/cart', cartListController.getCartList);
router.post('/api/add-to-cart', cartListController.addToCartList);
router.post('/api/remove-from-cart', cartListController.removeFromCartList);

router.get('*', controller.notFound);

module.exports = router;
