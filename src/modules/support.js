let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]
 

class supportdata
{
    
    constructor(persons)
    {this.persons=persons}




    check(data)
    {
        let arr=[]
        persons.forEach(element=>{
          if(element.age>=data.votingAge)
          {
            element.votingStatus=true;
            arr.push(element)
          }

        })

        return arr;
        
    }

}

let obj=new supportdata(persons);
module.exports=obj;