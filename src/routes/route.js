const express = require('express');
// const { result } = require('underscore');
const router = express.Router();
let object=require('../modules/support.js')


//1
router.post('/sol1', function (req, res) {
  
   result= object.convert(req.body);
   if(result===true)
   {res.send({result:"data already exist"})}
   else{
   res.send({status:"Data updated",players:object.data})
   }
});










module.exports = router;