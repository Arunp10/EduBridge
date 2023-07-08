const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    supervisor:{
        type:mongoose.Schema.Types.ObjectId,
    ref:   'user'
    },
    date:{
        type: Date
    },
    day:{type: String},
    timeSlot:{type:String},
    purpose:{type:String},
    sendDate:{type: Date.now}
})

const Appointment = mongoose.model('Appointment',AppointmentSchema);

module.exports = Appointment;