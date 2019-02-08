const express = require('express');
const router = express.Router();

//Models
const Movie = require('../models/Movie');

/* Save a movie*/
router.post('/', (req, res, next)=> {
   /* specifc alan almak ya da manüpülasyon yapmak istersen böyle kullanılabilir*/
   //  const {title,category,year,country,imdb_scores } = req.body;
   //  const movie =  new Movie({
   //      title:title,
   //      category:category,
   //      year:year,
   //      country:country,
   //      imdb_scores:imdb_scores
   //  });
   //  movie.save((err,data)=>{
   //      if(err)
   //          res.json(err);
   //
   //      res.json(data);
   //  });

    const movie = new Movie(req.body);
    const promise = movie.save();
    promise.then((data)=>{
        res.json(data);
    }).catch((err)=>{
       res.json(err);
    });

});

router.get('/', (req,res,next)=>{
    const promise = Movie.find({}).populate('Directory');
    promise.then((data)=>{
      // res.json(data);
       res.render('movies/movies',{title :'Film List',movie_list : data});
    }).catch((err)=>{
       res.json(err);
    });
});

router.get('/top10', (req,res,next)=>{
    const promise = Movie.find({}).limit(10).sort({imdb_score :-1}).populate('Directory');
    promise.then((data)=>{
        // res.json(data);
        res.render('movies/top10',{title:'Top 10',movie_top10 : data});
    }).catch((err)=>{
        res.json(err);
    });
});

router.get('/:movie_id',(req,res,next) =>{
   const promise = Movie.findById(req.params.movie_id);

   promise.then((movie)=>{
       res.json(movie);
   }).catch((err)=>{
       next(err);
   });
});

router.put('/:movie_id',(req,res,next) =>{
    const promise = Movie.findByIdAndUpdate(req.params.movie_id, req.body,{new : true});

    promise.then((movie)=>{
        res.json(movie);
    }).catch((err)=>{
        next(err);
    });
});

router.delete('/:movie_id',(req,res,next) =>{
    const promise = Movie.findByIdAndDelete(req.params.movie_id, req.body);

    promise.then((movie)=>{
        res.json(movie);
    }).catch((err)=>{
        next(err);
    });
});

module.exports = router;