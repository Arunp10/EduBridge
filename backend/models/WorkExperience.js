const mongoose = require('mongoose');

//Create Work Experience Schema for User:
const WorkExperienceSchema = mongoose.Schema({
    
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    title: { type: String, required: true },
    employee: { type: String, required: true },
    startDate:{type: Date,required :true},
    endDate:{type: Date,required :true},
    description:{type:String,required:true}
},{
    timestamps: true
})

//Export the Module to The User:
const WorkExperience = mongoose.model("WorkExperience", WorkExperienceSchema);

module.exports =  WorkExperience ;
