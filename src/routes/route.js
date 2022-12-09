const express = require('express');
const router = express.Router();
const welcome=require('../logger/logger.js')
const{printDate,printMonth,getBatchInfo}=require('../util/helper.js')
const{trim,changeToUpperCase,changetoLowerCase}=require('../validator/formatter.js');

const _ = require('lodash')

router.get('/test-me', function (req, res) {
    // problem 1
    console.log(welcome())
//  problem 2
console.log(printDate());
console.log(printMonth()+1);
console.log(getBatchInfo());

// problem 3

let name="   Ankush " 
console.log(trim(name))
console.log(changeToUpperCase(name))
console.log(changetoLowerCase(name))

// problem 4

let months=["january","february","march","april","may","june","july","august","september","october","november","december"]
console.log(_.chunk(months,3));
let odd=[1,3,5,7,9,11,13,15,17,19];
console.log(_.tail(odd));

let arr1=[3,4,5,8,3]
let arr2=[3,4,5,2,77,8,3]
let arr3=[3,4,1,10,11,5,8,3]
let arr4=[3,0,5,8,3,11,1]
let arr5=[3,4,5,8,3,65,77]
console.log(_.union(arr1,arr2,arr3,arr4,arr5))

console.log(_.fromPairs([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]))


    


    res.send('This is our domain')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;