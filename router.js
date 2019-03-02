const express = require('express');

const router = express.Router();

const productsController = require('./server/controllers/products.controller');
const wishListController = require('./server/controllers/wishList.controller');
const cartListController = require('./server/controllers/cart.controller');
const controller = require('./server/controller');

router.get('/products', productsController.getProducts);
router.get('/filtered-products', productsController.getFilteredProducts);
router.get('/baner', controller.getBanner);
router.get('/promotions', controller.getPromotions);
router.get('/killswitch', controller.getKillswitch);

router.get('/wish-list', wishListController.getWishList);
router.post('/add-to-wish-list', wishListController.addToWishList);
router.post('/remove-from-wish-list', wishListController.removeFromWishList);

router.get('/cart', cartListController.getCartList);
router.post('/add-to-cart', cartListController.addToCartList);
router.post('/remove-from-cart', cartListController.removeFromCartList);

router.get('*', controller.notFound);

module.exports = router;
