var express = require("express");
var Campgrounds = require("../models/campgrounds");

var router = express.Router();

router.get('/campgrounds', (req,res) => {
    Campgrounds.find({}, (err, campgrounds) => {
        if(err)
            console.log(err);
        else
            res.render("index", {campgrounds : campgrounds})
    });
});

router.post("/campgrounds", (req,res) => {
   var Campground = req.body.Campground 
   Campgrounds.create(Campground, (err,campground) =>{
    if(err)
        console.log(err)
    else
        res.redirect("/campgrounds");
   }); 
});


router.get('/campgrounds/new', (req,res) => {
    res.render("campgrounds/add");
});

module.exports  = router;