const express = require('express');
const router = express.Router();
const fetchUser  = require('../MiddleWare/fetchUser');
const Availability = require('../models/Availability');

router.post('/Availability',fetchUser,async(req,res)=>{
    try {

        const userId = req.user.id;
        const selectedTimeslots = req.body;

        // Save each selected timeslot to the database
        for (const timeslot of selectedTimeslots) {
          await Availability.create({
            supervisor: userId,
            day: timeslot.day,
            time: timeslot.time
          });
        }
    
        res.status(200).json({ message: 'Timeslots saved successfully' });

    res.status(200).json(availability);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
})

module.exports = router;