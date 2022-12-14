let players =
[
    // {
    //     "name": "manish",
    //     "dob": "1/1/1995",
    //     "gender": "male",
    //     "city": "jalandhar",
    //     "sports": [
    //         "swimming"
    //     ]
    // },
    // {
    //     "name": "gopal",
    //     "dob": "1/09/1995",
    //     "gender": "male",
    //     "city": "delhi",
    //     "sports": [
    //         "soccer"
    //     ]
    // },
    // {
    //     "name": "lokesh",
    //     "dob": "1/1/1990",
    //     "gender": "male",
    //     "city": "mumbai",
    //     "sports": [
    //         "soccer"
    //     ]
    // },
]

class supportdata
{
    
    constructor(data)
    {this.data=data}




    convert(data)
    {
        if(players.length===0)
        {
            players.push(data);
            return 
        }
        let result=false
         for(let i=0;i<players.length;i++)
         {
            if(data.name==players[i].name)
            {
                   return true
                   
            }
         }
       

         players.push(data)

        return "data updated";
        
    }

}

let obj=new supportdata(players);
module.exports=obj;