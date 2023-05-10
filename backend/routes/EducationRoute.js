const express = require('express')
const mongoose = require('mongoose');
const router = express.Router();
const fetchUser = require('../MiddleWare/fetchUser');
const Education = require('../models/Education');



//Create Route for Education a User Can ADD Education:
router.post('/AddEducation',fetchUser, async(req,res)=>{
    try {
        const { InstituteName, degree, startDate, endDate } = req.body;
        const education = new Education({

            user: req.user.id,InstituteName, degree, startDate,endDate ,
    })
    const InsertEducation = await education.save();
    res.json(InsertEducation);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error Occured");
    }
})

module.exports = router