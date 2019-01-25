const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DirectorySchema = new Schema({
    name : {type:String, required: true},
    surname : {type:String, required: true},
    birth_day : Date,
    death_day : Date,
    citizen : String,
    bio : {type : String, max:500}
});

module.exports = mongoose.model('Directory', DirectorySchema);