const express = require('express');
const router = express.Router();

//Models
const Movie = require('../models/Movie');

/* Save a movie*/
router.post('/', (req, res, next)=> {
    const {title,category,year,country,imdb_scores } = req.body;

    const movie =  new Movie({
      title:title,
      category:category,
      year:year,
      country:country,
      imdb_scores:imdb_scores
    });

    movie.save((err,data)=>{
        if(err)
          res.json(err);

        res.json(data);
    });
});

module.exports = router;
