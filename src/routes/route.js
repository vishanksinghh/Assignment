const express = require('express');
// const { result } = require('underscore');
const router = express.Router();
let object=require('../modules/support.js')


//1
router.post('/voting', function (req, res) {
  
   result= object.check(req.query);
   res.send({updatedData:result})
});










module.exports = router;