const express = require('express');
const router = express.Router();


//1
router.get('/missing', function (req, res) {
    let a=[1,2,4,5,6,7];
let n=a.length-1

let res1=0

for(let i=0;i<a.length;i++)
{
    res1+=a[i]

}
let missno=(a[n]*(a[n]+1)/2)-res1


console.log(missno)
   
    res.send("data : "+missno);
});

//2
router.get('/missing2', function (req, res) {
    let arr=[33,34,35,37,38]
let n2=arr.length;
// console.log(n2)
let res2=0;
for(let i=0;i<arr.length;i++)
{
    res2+=arr[i]
}
let misssno=((n2+1)*(arr[0]+arr[n2-1])/2)-res2
console.log(misssno)
   
    res.send("data : "+misssno);
});








module.exports = router;