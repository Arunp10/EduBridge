const mongoose = require('mongoose');

const ConnectionSchema = new mongoose.Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    supervisor:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'supervisor'
    },
    userFirstName : {type: String},
    userLastName : {type:String},
    userImage : {type:String},
    interest:{type: String},
    comment: {type:String},
    status:{type:String}
})

const Connections = mongoose.model('Connection',ConnectionSchema);

module.exports = Connections;