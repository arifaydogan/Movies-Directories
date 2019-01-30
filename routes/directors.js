const express = require('express');
const router = express.Router();

//Models
const Directory = require('../models/Directory');

/* Save a movie*/
router.post('/', (req, res, next)=> {
    const director = new Directory(req.body);

    const promise = director.save();
    promise.then((data)=>{
        res.json(data);
    }).catch((err)=>{
       res.json(err);
    });

});

router.get('/', (req,res,next)=>{
    const promise = Directory.find({});
    promise.then((data)=>{
       res.json(data);
    }).catch((err)=>{
       res.json(err);
    });
});

router.get('/:directory_id',(req,res)=>{
    const promise = Directory.findById(req.params.directory_id);

    promise.then((director) =>{
        res.json(director);
    }).catch((err)=>{
       res.json(err);
    });
});

module.exports = router;
