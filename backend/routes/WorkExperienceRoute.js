const express = require('express');
const router = express.Router();
const fetchUser = require('../MiddleWare/fetchUser');
const WorkExperience = require('../models/WorkExperience');

router.post('/AddWorkExperience',fetchUser,async(req,res)=>{
    try {
        const {title,employee,startDate,endDate,description} = req.body;
        const workExperience  = new WorkExperience({

            user: req.user.id,title,employee,startDate,endDate,description
        })

        //insert New Work Experience
        const insertWorkExperience = await workExperience.save();
        res.json(insertWorkExperience);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error Occured :",error);
    }
})

module.exports = router;