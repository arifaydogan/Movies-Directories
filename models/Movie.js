const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    directory_id :{ type:Schema.Types.ObjectId,ref:'Directory', required: false},
    title:{
       type:String,
       required : true
    },
    category : String,
    country : String,
    year : Number,
    imdb_score : Number,
    date : {
        type: Date,
        default : Date.now
    }
});

module.exports = mongoose.model('movie', MovieSchema);