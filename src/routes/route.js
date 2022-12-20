const express = require('express');
const router = express.Router();
const controller=require('../controllers/controller.js')
router.post('/createBook',controller.createBook)
router.post('/createAuthor',controller.createAuthor)
router.post('/findData',controller.findData)





module.exports = router;