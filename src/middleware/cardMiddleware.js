const cardModel=require('../model/card.js')
const customerModel=require('../model/customer')
const validator=require('validator')
const operations=async (req,res,next)=>{
//check customer id in database of customer and card
// if customer id is present in customer schema then take entry
// if customer id is already present in card database dont take entry for 

// check on customer schema
let checkcustomer=await customerModel.findOne({_id:req.body.customerId})
let checkOncard=await cardModel.findOne({customerId:req.body.customerId})
let customername=req.body.customerName.trim().split(" ");  //   ankush     singh  
let firstnameFromCard=customername[0];
let lastnameFromCarde=customername[customername.length-1];



if(!checkcustomer)
{
    res.send({result:"No customer found please check customer Id"})
}
else if(checkOncard)
{
    res.send({result:"This customerId is already presend in card"})
}
else{



    let customerFirstName=checkcustomer.firstName;
    let customerLastName=checkcustomer.lastName;
///////////////////////
//     console.log(customerFirstName)
// console.log(customerLastName)
// console.log(firstnameFromCard)
// console.log(lastnameFromCarde)
///////////////////////////////////////////
    if(firstnameFromCard.toUpperCase()!==customerFirstName.toUpperCase()||lastnameFromCarde.toUpperCase()!==customerLastName.toUpperCase())
    {
        res.send({result:"Name does not match with customer id name"})
    }
    else{
        
        

        req.body.customerName=customerFirstName+" "+customerLastName;


let checkOnDatabase=await cardModel.find();
if(checkOnDatabase.length===0)
{
   req.body.cardNumber="c-1"
   
}
else
{
    let checkOnDatabase2=await cardModel.find();
    let custId=checkOnDatabase2[checkOnDatabase2.length-1].cardNumber.split('');
    // console.log(custId)
    let custid2="";
    for(let i=2;i<custId.length;i++)
    {
        custid2+=custId[i];
    }
    let finalCustomerId=Number(custid2)+1
    finalCustomerId="C-"+String(finalCustomerId);
    // console.log(finalCustomerId)
    req.body.cardNumber=finalCustomerId

    


}
next();


}
}
}


module.exports={operations}