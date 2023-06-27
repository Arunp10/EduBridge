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
ProjectSchema.set('toJSON', {
    transform: function (doc, ret) {
      ret.startDate = formatDate(ret.startDate);
      ret.endDate = formatDate(ret.endDate);
      return ret;
    },
  });
  //func to format Date with no timing 
  function formatDate(date) {
    const isoDate = new Date(date).toISOString();
    return isoDate.split('T')[0];
  }
const Project = mongoose.model('project',ProjectSchema);
module.exports = Project