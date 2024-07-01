const express = require('express');
const router  =  express.Router();
const menuItem = require('../models/Menu');

router.post('/' , async (req ,res)=>{

    try{
        const Menu_data = req.body
        const newMenu = new menuItem(Menu_data);
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    
    }catch(err){
        console.log("error ");
        res.status(500).json({error: 'internal server error in menu item'});
    }
    
    
    })

    module.exports=router
    