const express = require('express');

const router = express.Router();

const productsController = require('./controllers/products.controller');
const wishListController = require('./controllers/wishList.controller');
const cartListController = require('./controllers/cart.controller');
const checkoutController = require('./controllers/checkout.controller');
const controller = require('./controller');

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

router.post('/payment', checkoutController.payment);
router.get('/success', checkoutController.onSuccess);
router.get('/cancel', checkoutController.onCancel);

router.get('*', controller.notFound);

module.exports = router;
