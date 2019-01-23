const mongoose = require('mongoose');

module.exports =()=>{
    mongoose.connect('mongodb://winston:Slender1924@ds111425.mlab.com:11425/letstartdb', { useNewUrlParser: true });
    mongoose.connection.on('open',()=>{
        console.log("MongoDB Connection : Success ! ");
    });
    mongoose.connection.on('error', (err)=>{
        console.log("MongoDB Connection : Failed -->" + err);
    });
};

