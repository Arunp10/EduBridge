const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    projectTitle : {
        type: String,
        require: true
    },
    startDate : {type:Date,require:true},
    endDate : {type:Date,require:true},
    description:{type:String,required:true}
},{
    timestamps : true
})

const Project = mongoose.model('project',ProjectSchema);
module.exports = Project