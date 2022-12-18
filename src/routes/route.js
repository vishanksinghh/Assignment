const express = require('express');
const router = express.Router();
const controller=require('../controller/bookController.js')


router.post("/createBook",controller.createBook  )

router.post("/getBooks", controller.getBooksData)

module.exports = router;