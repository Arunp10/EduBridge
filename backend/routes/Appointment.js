const express = require('express');
const router = express.Router();
const fetchUser  = require('../MiddleWare/fetchUser');
const Availability = require('../models/Availability');

router.post('/Availability',fetchUser,async(req,res)=>{
    try {

        const userId = req.user.id;
        const {day,availableSlots} = req.body;

        const availability = await Availability({
            supervisor : userId,
            day,
            availableSlots
        })
        await availability.save();
        res.status(201).json(availability)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
})

module.exports = router;