// validation for customer and create customer Id
//1. atleast first name should be present 2. mobile no should should be of 10 digit 3.valid Email  4 name formatting and check alphabets
const validator=require('validator')

const customerModel=require('../model/customer')

const validation=async(req,res,next)=>
{
    let data=req.body;
    if(data.firstName&&data.lastName&&data.mobileNumber&&data.email)
    {
        if(!validator.isAlpha(data.firstName.trim())||!validator.isAlpha(data.lastName.trim()))
        {
            res.send({result:"invalid Name special characters not allowed"})
        }
        else{


        // format of number 
      if(data.mobileNumber.toString().split("").length===10)
      {
        // check number on database
        let NumberVerification=await customerModel.findOne({mobileNumber:data.mobileNumber})

        if(!NumberVerification){



        if(validator.isEmail(data.email))
        {
           
            ////////////////////////////////////////////////////////////////////////
            //check Email on database check

            
                let resultOfId=await customerModel.findOne({email:data.email})
                
//////////////////////////////////////////////////////////////////////


            if(!resultOfId)
            {
                //////////////////////////////////////////////////////
        
                    let emailId=data.email.split("");
                    let finaluid=""
                    for(let i=0;i<emailId.length;i++)
                    {
                         if(emailId[i]=="@")
                         {break;}
                         else{
                            finaluid+=emailId[i];
                         }
                    }
                    finaluid= "SK-"+finaluid;
                    // eg sk-ankush12
                    
                    
/////////////////////////////////////////////////////////////////////
                req.body.customerId=finaluid;
                // status check
                if(!data.status||data.status=="ACTIVE"||data.status=="INACTIVE")
                {
                    // formatting data
                     req.body.firstName=req.body.firstName.trim();
                     req.body.lastName=req.body.lastName.trim();
                     req.body.address=req.body.address.trim();

                    next();
                }
                else{
                    res.send({result:"Status could be ACTIVE||INACTIVE only"})

                }
                
            }
            else
            {
                res.send({result:"Email already exist"})
            }

             
        }
        else{
            res.send({result:"Enter a valid Email"})

        }
    }
    else{

        res.send({result:"Number already in use "})
    }
          
      }
      else{
        res.send({result:"please enter 10 digit number only"})
      }
    } //////
    }
    else{
        res.send({result:"firstname, mobilenumber ,email field should'nt be empty"})
    }

    

}
module.exports={validation}