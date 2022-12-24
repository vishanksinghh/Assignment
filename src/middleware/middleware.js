const validation=(req,res,next)=>{
    if(req.headers.isfreeappuser==="true"||req.headers.isfreeappuser==="false")
    {
        req.headers.isfreeappuser=req.headers.isfreeappuser==="true"?true:false;

        
//         console.log(typeof req.headers.isfreeappuser)
// console.log(req.headers.isfreeappuser)

next();
      
    }
    
    else{
        res.send({result:'the request is missing a mandatory header. The value of field isFreeAppUser in a user document is determined by **isFreeAppUser** request header and it should be true and false only'})
    }



}


module.exports={validation}