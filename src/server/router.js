const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/api/products', controller.getProducts);
router.get('/api/baner', controller.getBanner);
router.get('/api/promotions', controller.getPromotions);
router.post('/api/wishList', controller.addToWishList);
router.put('/api/wishList', controller.removeFromWishList);
router.get('*', controller.notFound);

module.exports = router;
