const express = require('express');
const router = express.Router();
const fetchUser  = require('../MiddleWare/fetchUser');
const Availability = require('../models/Availability');
const Appointment = require('../models/Appointment');

//Route 1: To Add availability through selection the array
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
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
})

//Route 2: Fetch the Availability Through Date & UserID
router.post('/Availability/fetch',async(req,res)=>{
  const { date } = req.body;
  const {userId} = req.body;

  //Convert the Data into the Week
  const parsedDate = new Date(date);
  const options = { weekday: 'long' };

    // Get the day of the week
    const dayOfWeek = parsedDate.toLocaleString('en-US', options);
  try {
    // for time slots matching the provided date
    const availability= await Availability.find({ day: dayOfWeek,supervisor : userId });

    res.json(availability);
  } catch (error) {
    console.error('Error fetching time slots:', error);
    res.status(500).json({ error: 'Failed to fetch time slots' });
  }
})
//Router 3 : API to send Appointment Request to Supervisor:
router.post('/request',fetchUser,async(req,res)=>{
    const {supervisor,date,day,timeSlot,purpose} = req.body;

try {
      const appointment = new Appointment({
        user: req.user.id,
        supervisor,
        date,
        day,
        timeSlot,
        purpose
      })
      await appointment.save();
      res.json(appointment);
      
} catch (error) {
  console.error('Error fetching time slots:', error);
    res.status(500).json({ error: 'Failed to Send Appointment Request' });
}

})
module.exports = router;