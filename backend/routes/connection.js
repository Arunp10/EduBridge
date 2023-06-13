const express = require('express');
const  router = express.Router();
const fetchUser = require('../MiddleWare/fetchUser');
const {Connections, validate} = require('../models/Connections');
const { User } = require("../models/user");

router.post('/AddConnection',fetchUser, async(req,res)=>{
    try{
        const {error} = validate(req.body);
        const {supervisor} = req.body;
        if(error)
            return res.status(400).send({ message: error.details[0].message });

        const connection = await Connections({
            user: req.user.id,
            supervisor,
            ...req.body
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
        const supervisorId = req.user.id;

        const connections = await Connections.find({ supervisor: supervisorId })
        .populate('user') //Appent ths user field to the particular supervisor Id 
        .exec();
  
      if (!connections || connections.length === 0) {
        return res.status(404).json({ error: 'Connection not found' });
      }


      // Append the user data to the connection data
      const connectionsWithUserData = connections.map((connection) => ({
        ...connection.toObject(),
        user: connection.user ? connection.user.toObject() : null,
      }));
      res.json(connectionsWithUserData);
        
        
    }catch(error){
        console.error(error.message);
        res.status(500).json({error : "Inernal Server error"})
    }
})
module.exports = router;