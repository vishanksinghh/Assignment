const express = require('express');
const router = express.Router();


//1
router.get('/movies', function (req, res) {
    let movieslist=["yashoda","thank God","Ram Setu","Freddy","Black Adam"]
   
    res.send(movieslist);
});

//2&3
router.get('/movies/:indexNumber', function (req, res) {
    
    let movieslist=["yashoda","thank God","Ram Setu","Freddy","Black Adam"]
    if(req.params.indexNumber<movieslist.length)
    {
        res.send(movieslist[req.params.indexNumber])
    }
    else{
        
        res.send("use a valid index number")
    }
});
//4
router.get('/films',(req,res)=>{

   let film= [ {
        id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Nemo'
       }]
       res.send(film);
       

})

// 5
router.get("/films/:filmId",(req,res)=>{
    let film= [ {
        id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Nemo'
       }]
       let result;
       film.forEach(element=>{
        if(req.params.filmId==element.id)
        {
            result=element
        }
         

       })
       if(typeof result !=="undefined")
         {
            res.send(result)
         }
         else
         {
            res.send("No movie exists with this id")
         }





})




module.exports = router;