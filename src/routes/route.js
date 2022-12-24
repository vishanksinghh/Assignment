const express = require('express');
const router = express.Router();
const user=require('../controllers/userController')
const product=require('../controllers/productController')
const order=require('../controllers/orderController')
const checkValidations=require("../middleware/middleware")

router.post('/createUser',checkValidations.validation,user.createUser)
router.post('/createProduct',product.createProduct)
router.post('/createOrder',checkValidations.validation,order.createOrder)
module.exports = router;