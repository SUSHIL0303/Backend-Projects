 
const express = require('express');
const router = express.Router();
const {createProduct, getProduct, getAllProducts, updateProduct, deleteProduct} = require('../controllers/product.controller.js');

router.get('/:id', getProduct);
router.get('/', getAllProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.post('/',createProduct)

module.exports = router;