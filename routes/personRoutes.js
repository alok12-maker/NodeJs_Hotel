const express = require('express');
const router  =  express.Router();
const Person = require('../models/person');


router.post('/',async(req , res)=>{
    //  const data = req.body
    //  const newPerson = new  Person(data);
    //  newPerson.save((error , Saveperson) => {
    //     if (error) {
    //         console.log("error saving person ", person);
    //        res.status(500).json({error: 'internal server error'})
    //     }else{
    //         console.log('data saved successfully');
    //          res.status(200).json(Saveperson);
    //     }
    
    try{
        const data = req.body
        const newPerson = new  Person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }catch(err){
        console.log("error ");
        res.status(500).json({error: 'internal server error'});
    }
    
    })
    
    router.get('/',async(req ,res)=>{
        try{
        const data = await Person.find();
        console.log('data fetched successfully');
        res.status(200).json(data);
        }catch(err){
            console.log("error ");
            res.status(500).json({error: 'internal server error'});
        }
    })

    router.get('/:WorkType' ,async (req ,res)=>{
        try{
          const WorkType=req.params.WorkType;
          if(WorkType=='chef' || WorkType=='waiter' || WorkType=='manager' ){
           const response = await Person.find({work:WorkType})
           console.log('data fetched successfully');
           res.status(200).json(response);
          }else{
            res.status(404).json({error : 'invalid work type'});
          }
        }catch(err){
            console.log("error ");
            res.status(500).json({error: 'internal server error'});
        }
        })
        

router.put('/:id' , async(req , res )=>{
    try{
    const personId = req.params.id;
    const updatePerson = req.body;

    const respons = await Person.findByIdAndUpdate(personId ,updatePerson ,{
        new: true, 
        runValidators: true 
    })
    if(!respons)
    {
        return res.status(404).json({ error: 'Person not found' });
    }
    console.log('Data updated successfully');
    res.status(200).json(respons);
}catch(err){

    console.log("error ");
    res.status(500).json({error: 'internal server error'});
}
})

router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const deletedPerson = await Person.findByIdAndDelete(personId);

        if (!deletedPerson) {
            return res.status(404).json({ error: 'Person not found' });
        }

        console.log('Person deleted successfully');
        res.status(200).json({ message: 'Person deleted successfully' });
    } catch (err) {
        console.error('Error deleting person:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports=router