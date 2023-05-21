const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const Joi = require("joi");


const EducationSchema = new mongoose.Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    InstituteName: { type: String, required: true },
    degree: { type: String, required: true },
    startDate:{type: Date,required :true},
    endDate:{type: Date,required :true},

},{
    timestamps: true
})

const Education = mongoose.model("education", EducationSchema);

module.exports =  Education ;