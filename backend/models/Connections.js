const mongoose = require('mongoose');
const Joi = require("joi");

const ConnectionSchema = new mongoose.Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    supervisor:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    interest:{type: String},
    comment: {type:String},
    sendDate:{type: Date, default: Date.now},
    status:{
        type:String,
        enum: ['pending','approved','rejected'],
        default : 'pending'
    }
})

const validate = (data)=>{
    const schema = Joi.object({
        supervisor : Joi.string().strip(),
        interest: Joi.string().required().label("Please Enter Interest"),
		comment: Joi.string().required().label("Please Enter Commont"),
    });
    return schema.validate(data);
}

const Connections = mongoose.model('Connection',ConnectionSchema);

module.exports = {Connections,validate};