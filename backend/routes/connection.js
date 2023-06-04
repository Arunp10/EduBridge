const express = require('express');
const  router = express.Router();
const fetchUser = require('../MiddleWare/fetchUser');
const Connections = require('../models/Connections');
const { User } = require("../models/user");

router.post('/AddConnection',fetchUser, async(req,res)=>{
    try{

        const {supervisor,interest,comment,status} = req.body;
        const UserProfile = await User.findById(req.user.id);

        const connection = await Connections({
            user:req.user.id, supervisor ,
            userFirstName : UserProfile.firstName,
            userLastName : UserProfile.lastName,
            userImage : UserProfile.image, 
            interest, comment,status
        })
        const InsertConnection = await connection.save();
        res.json(InsertConnection);

    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})
//Route 2 : To Fetch All Connection on Behalf of Supervisor ID:
router.get('/fetchConnection',fetchUser,async(req,res)=>{
    try{
        
        const userId = req.user.id;
        const supervisor = await Connections.find({supervisor : userId});
        
        res.json(supervisor);

    }catch(error){
        console.error(error.message);
        res.status(500).json({error : "Inernal Server error"})
    }
})

router.get('/')

module.exports = router;