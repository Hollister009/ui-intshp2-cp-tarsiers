const express = require('express');

const router = express.Router();

const productsController = require('./controllers/products.controller');
const wishListController = require('./controllers/wishList.controller');
const cartListController = require('./controllers/cart.controller');
const controller = require('./controller');

router.get('/new-arrivals', productsController.getNewArrivals);
router.get('/product-item', productsController.getProductItem);
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
