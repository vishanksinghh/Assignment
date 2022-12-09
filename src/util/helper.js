const date=new Date();
const printDate=()=>
{
    
    return date;
}
const printMonth=()=>
{
    return date.getMonth();
}
const getBatchInfo=()=>
{
    return  'Californium, W4D4, the topic for today is Nodejs module system';
} 
module.exports={printDate,printMonth,getBatchInfo}