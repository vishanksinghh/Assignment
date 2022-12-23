const global=(req,res,next)=>{
    var date = new Date(); 
    var currentDateAndtime =date.getDate() + " "+ (date.getMonth()+1)+ " "+date.getFullYear()+ "  "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

    let ipAddress= req.ip
    let url= req.originalUrl
    console.log(`${currentDateAndtime}  ${ipAddress}  ${url}`)
    next()    
}

module.exports={global}