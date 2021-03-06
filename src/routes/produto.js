const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/produto');

router.post('', product_controller.productCreate);
router.get('', product_controller.productAll);
router.get('/:id', product_controller.productDetails);
router.put('/:id', product_controller.productUpdate);
router.delete('/:id', product_controller.productDelete);

module.exports = router;