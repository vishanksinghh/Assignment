const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")




router.post("/createAuthor", authorController.createAuthor  )
router.post('/createPublisher',publisherController.createPublisher)

router.post("/createBooksData", bookController.createBook)
router.get("/booksAndAuthor",bookController.booksAndAuthor)
router.put("/update",bookController.HardCoverstatus)
router.put("/updatePrize",bookController.updatePrice)



module.exports = router;